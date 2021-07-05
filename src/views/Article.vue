<template>
  <div class="Article">
    <div class="content clearfix">
      <div class="left_box">
        <div class="main">
          <div class="main_nav">
            您现在的位置是：
            <el-breadcrumb style="display: inline-block" separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{name: 'SkillShare'}">技术分享</el-breadcrumb-item>
              <el-breadcrumb-item>当前文章</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="main_content">
            <h3>{{data.title}}</h3>
            <span class="release_time">{{ releaseDate }}</span>
            <span class="ReadCount">
              <img src="https://www.zhangqinblog.com//templates/Images/see.png">
              <span data-id="33">{{ data.looks}}</span>
            </span>
            <div class="main_text markdown-body">
              <!-- <mark-down /> -->
              <component :is="MarkDown"></component>
            </div>
            <div class="reprint" v-if="data.author">
              <p>本文转自于</p>
              <p>作者：{{data.author}}</p>
              <a :href="data.originUrl" target="_blank">看原文</a>
            </div>
          </div>
        </div>
        <div class="article_speak">
          <div class="title">
            <span>文章评论</span>
          </div>
          <div id="SOHUCS" :sid="id" ></div>
        </div>
      </div>
      <div class="right_box">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint import/order:off  */
/* eslint prefer-template:off  */
// import MarkDown from '../assets/article/9.md';
import Sidebar from './layout/Sidebar.vue';
import Vue from 'vue';
import article from '../api/article';

export default {
  components: {
    // MarkDown,
    Sidebar,
  },
  data() {
    return {
      id: this.$route.params.id,
      MarkDown: null,
      data: {},
      releaseDate: null,
    };
  },
  async created() {
    const { default: cmp } = await import('../assets/article/' + this.id + '.md');
    Vue.component('mark-down', cmp);
    this.MarkDown = 'mark-down';
    const result = await article.getArticle(this.id);
    this.data = result;
    this.releaseDate = result.releaseDate.substr(0, 10);
  },
};
</script>

<style lang="less" scoped>
@import '~@/assets/style/var.less';
.Article {
  .layout();

  .main {
    background-color: #fff;
    border-radius: 4px;
    padding-top: 20px;
    padding-bottom: 40px;

    .main_nav {
      width: 96%;
      font-size: 16px;
      font-weight: bold;
      color: rgb(51, 51, 51);
      display: block;
      margin: 0 auto;
      border-bottom: 2px solid rgb(85, 85, 85);
      padding-bottom: 8px;
    }

    .main_content {
      width: 96%;
      margin: 20px auto 0;

      h3 {
        font-size: 24px;
        color: rgb(51, 51, 51);
        margin-bottom: 20px;
      }

      .release_time {
        color: rgb(153, 153, 153);
        font-size: 14px;
      }

      .ReadCount {
        font-size: 14px;
        color: rgb(153, 153, 153);
        margin-left: 24px;

        img {
          width: 24px;
          margin-right: 4px;
          vertical-align: top;
        }
      }

      .main_text {
        margin-top: 20px;
      }

      .reprint {
        margin-top: 30px;
        a{
          text-decoration: underline;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }

  .article_speak {
    background: #FFF;
    margin-top: 20px;
    border-radius: 4px;
    padding: 20px 4% 40px;

    .title {
      margin: 0 auto;
      border-bottom: 1px solid #eee;
      line-height: 40px;
      font-size: 16px;
      color: #484848;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 45px;
        height: 2px;
        background: #000;
        left: 0;
        bottom: 0;
        transition: all .5s ease;
      }

      &:hover::after {
        width: 85px;
      }
    }
  }
}
</style>
