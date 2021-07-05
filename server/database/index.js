const express = require('express');
const cors = require('cors');
const articleSer = require('./services/articleService');

const app = express();

app.use(cors());

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

app.listen(3000, () => console.log('server is running at 3000'));
