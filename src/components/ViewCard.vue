<template>
  <div class="view_card">
    <div class="title">
      <router-link
        target="_blank"
        :to="{name: 'Article', params: {id: data.contentUrl}}"
        :title="data.title"
      >
        <b>【热】</b>
        <span>{{ data.title }}</span>
      </router-link>
    </div>
    <div class="content clearfix">
      <div class="img">
        <router-link
          target="_blank"
          :to="{name: 'Article', params: {id: data.contentUrl}}"
          :title="data.title"
        >
          <img :src="data.coverImg" :title="data.title">
        </router-link>
      </div>
      <div class="text">{{ data.describe }}</div>
      <div class="info">
        <span class="author">{{ data.author || '肖连伟' }}</span>
        <span class="time">{{ releaseDate }}</span>
        <span class="look">
          <img src="https://www.zhangqinblog.com//templates/Images/see.png">
          <span>{{ data.looks }}</span>
        </span>
        <span class="giveLike" :class="{niceOn: isGiveLike}" @click="giveLike">
          <img :src="giveLikeUrl">
          <span>{{ giveLikeNum }}</span>
        </span>
        <router-link
          class="readMore"
          target="_blank"
          :to="{name: 'Article', params: {id: data.contentUrl}}"
          :title="data.title"
        >阅读文章</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import article from '../api/article';

export default {
  props: {
    data: {
      required: true,
    },
  },
  data() {
    return {
      isGiveLike: false,
      releaseDate: this.data.releaseDate.substr(0, 10),
      giveLikeNum: this.data.likes,
      giveLikeUrl: 'https://www.zhangqinblog.com//templates/Images/giveLike.png',
      giveLikeUrlNo: 'https://www.zhangqinblog.com//templates/Images/giveLike.png',
      giveLikeUrlActivce: 'https://www.zhangqinblog.com/templates/Images/giveLike_On.png',
    };
  },
  methods: {
    async giveLike() {
      if (this.isGiveLike) {
        this.giveLikeUrl = this.giveLikeUrlNo;
        this.giveLikeNum -= 1;
        await article.reduceLikes(this.data.id);
      } else {
        this.giveLikeUrl = this.giveLikeUrlActivce;
        this.giveLikeNum += 1;
        await article.addLikes(this.data.id);
      }
      this.isGiveLike = !this.isGiveLike;
    },
  },
};
</script>

<style lang="less" scoped>
.view_card {
  .title{
    a {
      display: block;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 1;

      b {
        color: #f00;
      }

      span {
        transition: all 0.5s ease;
      }
    }
  }

  .img {
    width: 23%;
    border-radius: 3px;
    overflow: hidden;
    float: left;
    margin-right: 2%;

    a {
      display: block;
    }
    img  {
      width: 100%;
      transition: all 0.5s ease;
      display: block;
    }
  }

  .text {
    font-size: 14px;
    color: #666;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    width: 75%;
    float: left;
    line-height: 26px;
    max-height: 105px;
  }

  .info {
    display: block;
    width: 75%;
    float: left;
    margin-top: 10px;
    line-height: 34px;
    color: #999;
    position: relative;

    .time {
      margin-left: 10px;
    }

    .look {
      font-size: 14px;
      margin-left: 40px;

      img {
        width: 26px;
        position: relative;
        top: 5px;
        margin-right: 4px;
        vertical-align: text-bottom;
      }
    }

    .giveLike {
      font-size: 14px;
      margin-left: 40px;
      cursor: pointer;

      img {
        width: 26px;
        position: relative;
        top: 3px;
        vertical-align: text-bottom;
      }
    }

    .readMore {
      display: block;
      background: #66CDAA;
      padding: 0 10px;
      height: 28px;
      line-height: 28px;
      color: #FFF;
      border-radius: 3px;
      position: absolute;
      right: 0;
      bottom: 6px;
    }
  }
}

.niceOn>img{
  animation: giveLike .3s;
}

@keyframes giveLike{
  0%{transform: scale(1)}
  40%{transform: scale(1.5)}
  100%{transform: scale(1)}
}
</style>
