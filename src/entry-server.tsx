import createEmotionServer from '@emotion/server/create-instance';
import type * as express from 'express';
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server';
import App from './App';
import createEmotionCache from './createEmotionCache';
import routes from './routes';

const helmetContext = {};

export function createFetchRequest(
  req: express.Request,
  res: express.Response,
): Request {
  const origin = `${req.protocol}://${req.get('host')}`;
  const url = new URL(req.originalUrl || req.url, origin);
  const controller = new AbortController();
  res.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
}

interface IRenderProps {
  req: express.Request;
  res: express.Response;
}

export async function render({ req, res }: IRenderProps) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const { query, dataRoutes } = createStaticHandler(routes);
  const remixRequest = createFetchRequest(req, res);
  const context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  const routerWithContext = createStaticRouter(dataRoutes, context);

  const html = renderToString(
    <App emotionCache={cache} helmetContext={helmetContext}>
      <StaticRouterProvider router={routerWithContext} context={context} />
    </App>,
  );
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  return { html, emotionCss, helmetContext };
}
