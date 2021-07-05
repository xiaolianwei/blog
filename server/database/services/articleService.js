/* eslint func-names:off */
const mysql = require('mysql2/promise');

const option = {
  host: 'localhost',
  user: 'root',
  password: '=iVAF-Bhs3g!',
  database: 'my_blog',
};

async function handelArticlelike(id, num) {
  const connection = await mysql.createConnection(option);
  const sql = 'SELECT * FROM `articletable` where contentUrl = ?';
  const [[{ likes }]] = await connection.execute(sql, [id]);
  const sql2 = `update articletable set likes = ${likes + num} where id = ?`;
  await connection.execute(sql2, [id]);
  connection.end();
}

exports.getAllArticle = async function (type, limit) {
  const connection = await mysql.createConnection(option);
  let sql = 'SELECT * FROM `articletable` where type = ? ';
  let results;
  if (limit) {
    sql += 'limit ?';
    results = await connection.execute(sql, [type, limit]);
  } else {
    results = await connection.execute(sql, [type]);
  }
  connection.end();
  return results[0];
};

exports.getNewRelease = async function () {
  const connection = await mysql.createConnection(option);
  const sql = 'SELECT * FROM `articletable` order by releaseDate DESC limit 6';
  const [results] = await connection.execute(sql);
  connection.end();
  return results;
};

exports.getClickRanking = async function () {
  const connection = await mysql.createConnection(option);
  const sql = 'SELECT * FROM `articletable` order by looks DESC limit 8';
  const [results] = await connection.execute(sql);
  connection.end();
  return results;
};

exports.getArticleById = async function (id) {
  const connection = await mysql.createConnection(option);
  const sql = 'SELECT * FROM `articletable` where contentUrl = ?';
  const [[results]] = await connection.execute(sql, [id]);
  connection.end();
  return results;
};

exports.getArticleBySearch = async function (value) {
  const connection = await mysql.createConnection(option);
  const sql = "SELECT * FROM articletable where title like CONCAT('%',?,'%')";
  const [results] = await connection.execute(sql, [value]);
  connection.end();
  return results;
};

exports.addArticleLook = async function (article) {
  const { looks, id } = article;
  const connection = await mysql.createConnection(option);
  const sql = `UPDATE articletable set looks = ${+looks + 1} where id = ${id}`;
  await connection.execute(sql);
  connection.end();
};

exports.addArticlelike = function (id) {
  handelArticlelike(id, +1);
};

exports.reduceArticlelike = function (id) {
  handelArticlelike(id, -1);
};
