<template>
  <div class="sidebar">
    <div class="ranking">
      <p>点击排行</p>
      <ul>
        <li v-for="(item, index) in rankingData" :key="item.id">
          <router-link
            :to="{name: 'Article', params: {id: item.contentUrl}}"
            target="_blank"
            :title="item.title"
          >
            <span class="ranking_cur" :class="{ranking_cur_topThree: index<3}">{{index+1}}</span>
            <span class="title">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="newest">
      <p>最新发布</p>
      <ul>
        <li class="clearfix" v-for="item in newData" :key="item.id">
          <router-link
            :to="{name: 'Article', params: {id: item.contentUrl}}"
            target="_blank"
            :title="item.title"
          >
            <div class="img">
              <img :src="item.coverImg" />
            </div>
            <p>{{ item.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="tags">
      <p>标签云</p>
      <ul class="clearfix">
        <li style="background: #98d71e">
          <a href="https://www.caniuse.com/" target="_blank">caniuse兼容</a>
        </li>
        <li style="background: #d40f7a">
          <a href="https://www.bootcdn.cn/" target="_blank">CDN大全</a>
        </li>
        <li style="background: #8100ef">
          <a href="https://vuejs.bootcss.com/guide/" target="_blank">Vue.js</a>
        </li>
        <li style="background: #006076">
          <a href="http://caibaojian.com/30-seconds-of-css/#sibling-fade" target="_blank">经典CSS片段</a>
        </li>
        <li style="background: #df240d">
          <a href="http://momentjs.cn/" target="_blank">Moment.js</a>
        </li>
        <li style="background: #b85927">
          <a href="https://github.com/stephentian/33-js-concepts" target="_blank">JS33个概念</a>
        </li>
        <li style="background: #5e88e2">
          <a href="https://getman.cn/" target="_blank">Http接口测试</a>
        </li>
        <li style="background: #0a261b">
          <a href="http://www.bootstrapmb.com/chajian/vuejs" target="_blank">Vue插件大全</a>
        </li>
        <li style="background: #f2c0ea">
          <a href="http://mockjs.com/" target="_blank">Mock.js</a>
        </li>
        <li style="background: #a1efa7">
          <a href="https://www.webpackjs.com/" target="_blank">Webpack</a>
        </li>
        <li style="background: #98d0d3">
          <a href="https://www.runoob.com/w3cnote/es6-tutorial.html" target="_blank">ES6</a>
        </li>
        <li style="background: #665e9e">
          <a href="https://duyi.ke.qq.com/" target="_blank">渡一课堂</a>
        </li>
        <li style="background: #0584f2">
          <a href="https://www.npmjs.com/" target="_blank">npm官网</a>
        </li>
        <li style="background: #9ca79f">
          <a href="https://www.runoob.com/css3/css3-tutorial.html" target="_blank">css3</a>
        </li>
        <li style="background: #50790c">
          <a href="https://www.expressjs.com.cn/" target="_blank">Express</a>
        </li>
        <li style="background: #cb38e8">
          <a href="https://nodejs.org/zh-cn/" target="_blank">node官网</a>
        </li>
        <li style="background: #d8ee97">
          <a href="https://vitejs.bootcss.com/" target="_blank">Vite</a>
        </li>
        <li style="background: #d9b24c">
          <a href="https://www.bootcss.com/p/git-guide/" target="_blank">git</a>
        </li>
        <li style="background: #35c44f">
          <a href="https://www.jquery123.com/" target="_blank">jquery中文网</a>
        </li>
        <li style="background: #0e398a">
          <a href="https://less.bootcss.com/" target="_blank">less</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import article from '@/api/article';

export default {
  data() {
    return {
      rankingData: [],
      newData: [],
    };
  },
  async mounted() {
    const ranking = await article.getRanking();
    this.rankingData = ranking;
    const newData = await article.getNew();
    this.newData = newData;
  },
};
</script>

<style lang="less" scoped>
.ranking {
  background-color: #fff;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 30px;

  p {
    width: 86%;
    margin: 0 auto;
    line-height: 32px;
    color: #000;
    position: relative;
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    &::before {
      content: "";
      display: block;
      width: 21.2%;
      height: 2px;
      background: #000;
      position: absolute;
      top: 15px;
      right: 74.6%;
      transition: all 0.5s ease;
    }
    &::after {
      content: "";
      display: block;
      width: 21.2%;
      height: 2px;
      background: #000;
      position: absolute;
      top: 15px;
      left: 74.6%;
      transition: all 0.5s ease;
    }

    &:hover {
      &::after, &::before {
        width: 30%;
      }
    }
  }

  ul {
    li:nth-child(2n) a{
      background-color: #f6f6f6;
    }
    a {
      display: block;
      width: 86%;
      margin: 10px auto 0;
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #333;

      .ranking_cur {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #B1B1B1;
        position: relative;
        top: -1px;
        margin-left: 6px;
        margin-right: 4px;
        font-size: 9px;
        text-align: center;
        line-height: 16px;
        color: #FFF;
      }

      .ranking_cur_topThree {
        background: #FF6600;
      }

      .title {
        color: #333;
        font-size: 16px;
      }
    }
  }
}
.newest {
  background-color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 20px;

  & > p {
    width: 86%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    line-height: 32px;
    color: #484848;
    position: relative;
    font-weight: bold;

    &::before {
      content: "";
      display: block;
      width: 60px;
      height: 2px;
      background: #000;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.5s ease;
    }

    &:hover {
      &::after, &::before {
        width: 85px;
      }
    }
  }

  ul {
    margin-top: 20px;

    li {
      width: 86%;
      overflow: hidden;
      margin: 0 auto 20px;

      &:hover {
        background-color: #f6f6f6;
      }

      a {
        display: flex;
        align-items: center;

        .img {
          width: 70px;
          margin-right: 10px;
          flex-shrink: 0;

          img {
            width: 100%;
            display: block;
          }
        }

        p {
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
.tags {
  background-color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 20px;

  p {
    width: 86%;
    margin: 0 auto;
    line-height: 32px;
    color: #000;
    position: relative;
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    &::before {
      content: "";
      display: block;
      width: 21.2%;
      height: 2px;
      background: #000;
      position: absolute;
      top: 15px;
      right: 74.6%;
      transition: all 0.5s ease;
    }

    &::after {
      content: "";
      display: block;
      width: 21.2%;
      height: 2px;
      background: #000;
      position: absolute;
      top: 15px;
      left: 74.6%;
      transition: all 0.5s ease;
    }

    &:hover {
      &::after, &::before {
        width: 30%;
      }
    }
  }

  ul {
    width: 86%;
    margin: 20px auto 0;

    li {
      float: left;
      padding: 6px 10px;
      margin: 0 10px 10px 0;
      background: rgb(144, 187, 48);

      a {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
