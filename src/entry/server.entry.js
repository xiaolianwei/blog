// 这个文件在服务器环境中的意义：产生Vue实例以及组件
import createApp from '../main';

// 让每个客户端访问的都是一个新的vue实例
export default (ctx) => new Promise((resolve, reject) => {
  const { app, router } = createApp();
  router.push(ctx.url);

  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents.length) {
      reject(new Error({ code: 404, url: ctx.url }));
    }
    resolve(app);
  }, reject);
});
