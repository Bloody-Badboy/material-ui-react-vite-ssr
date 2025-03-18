import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import createEmotionCache from "./createEmotionCache";
import routes from "./routes";

const cache = createEmotionCache();

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <App emotionCache={cache}>
    <RouterProvider router={createBrowserRouter(routes)} />
  </App>
);
