const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.rkeplin.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      },
    })
  );
};