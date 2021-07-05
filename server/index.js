const express = require('express');
const ServerRender = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');
const articleSer = require('./database/services/articleService');

const app = express();
// const serverBundle = fs.readFileSync('../dist/server.bundle.js', 'utf8');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

app.use(express.static(path.resolve(__dirname, '../dist'), { index: false }));
// vue环境（webpack) 关联 Server
const render = ServerRender.createBundleRenderer(serverBundle, {
  template: fs.readFileSync('./index.ssr.html', 'utf8'),
  clientManifest,
});
// const render = ServerRender.createRenderer({
//   template: fs.readFileSync('./index.ssr.html', 'utf8'),
// });

app.get('/getSkill', async (req, res) => {
  const { limit } = req.query;
  const result = await articleSer.getAllArticle(0, limit);
  res.send(result);
});

app.get('/getView', async (req, res) => {
  const { limit } = req.query;
  const result = await articleSer.getAllArticle(1, limit);
  res.send(result);
});

app.get('/getNew', async (req, res) => {
  const result = await articleSer.getNewRelease();
  res.send(result);
});

app.get('/getRanking', async (req, res) => {
  const result = await articleSer.getClickRanking();
  res.send(result);
});

app.get('/getArticle', async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send({ code: 400, msg: '缺少文章Id' });
    return;
  }
  const result = await articleSer.getArticleById(id);
  res.send(result);
  articleSer.addArticleLook(result);
});

app.get('/search', async (req, res) => {
  const { value } = req.query;
  if (!value) {
    res.send({ code: 400, msg: '缺少关键词' });
    return;
  }
  const result = await articleSer.getArticleBySearch(value);
  res.send(result);
});

app.get('/addLikes', async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send({ code: 400, msg: '缺少文章Id' });
    return;
  }
  await articleSer.addArticlelike(id);
  res.send({ code: 200, msg: 'OK' });
});

app.get('/reduceLikes', async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send({ code: 400, msg: '缺少文章Id' });
    return;
  }
  await articleSer.reduceArticlelike(id);
  res.send({ code: 200, msg: 'OK' });
});

app.get('*', async (req, res) => {
  try {
    // 2. 渲染器根据vm生成html字符串
    const { url } = req;
    const html = await render.renderToString({ title: 'SSR', desc: 'It is a page about SSR', url });
    res.send(html);
  } catch ({ url, code }) {
    res.status(code).send(`状态码为:${code}，访问的路径是${url}`);
  }
});

app.listen(80, () => console.log('server is running at 9527'));
