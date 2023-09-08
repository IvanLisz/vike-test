import { createRouter } from "@hattip/router";
import { renderPage } from "vite-plugin-ssr/server";
import { telefunc } from "telefunc";

const router = createRouter();

/**
 * Telefunc route
 *
 * @link {@see https://telefunc.com}
 **/
router.post("/_telefunc", async (context) => {
  const httpResponse = await telefunc({
    url: context.url.toString(),
    method: context.method,
    body: await context.request.text(),
    context,
  });
  const { body, statusCode, contentType } = httpResponse;
  return new Response(body, {
    status: statusCode,
    headers: {
      "content-type": contentType,
    },
  });
});

/**
 * Vike route
 *
 * @link {@see https://vite-plugin-ssr.com}
 **/
router.use(async (context) => {
  const pageContextInit = { urlOriginal: context.request.url };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;

  return new Response(await response?.getBody(), {
    status: response?.statusCode,
    headers: response
      ? {
          "content-type": response.contentType,
        }
      : {},
  });
});

export default router.buildHandler();
