import _createRouter from 'router5';
import browserPluginFactory from 'router5-plugin-browser';

export const createRouter = ({ routes }) => {
  const router = _createRouter(routes);
  router.usePlugin(browserPluginFactory());
  router.start();
  return router;
};
