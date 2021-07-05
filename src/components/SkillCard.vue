<template>
  <div class="skill_card clearfix">
    <div class="img">
      <!-- <a href="#" target="_blank" :title="data.title"> -->
      <router-link
        :to="{name: 'Article', params: {id: data.contentUrl}}"
        target="_blank"
        :title="data.title"
      >
        <img :src="data.coverImg">
      </router-link>
    </div>
    <b>{{data.title}}</b>
    <p>{{data.describe}}</p>
    <router-link
      class="readMore"
      :to="{name: 'Article', params: {id: data.contentUrl}}"
      target="_blank"
      :title="data.title"
    >
      <span>+</span> 文章阅读
    </router-link>
    <div class="giveLike" :class="{niceOn: isGiveLike}" @click="giveLike">
      <img :src="giveLikeUrl">
      <span>{{ giveLikeNum }}</span>
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
.skill_card{
  .img {
    width: 100%;
    height: 160px;
    border-radius: 3px;
    overflow: hidden;
    background: #eee;

    img {
      width: 100%;
      height: 100%;
      transition: all .5s ease;
      display: block;
    }
  }

  b {
    display: block;
    width: 100%;
    overflow: hidden;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: #999;
    line-height: 22px;
    font-size: 14px;
    height: 62px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  }

  .readMore {
    font-size: 16px;
    color: #20B2AA;
    float: left;
    margin-top: 14px;
  }

  .giveLike {
    float: right;
    margin-top: 14px;
    font-size: 14px;
    color: #999;
    line-height: 23px;
    cursor: pointer;

    img {
      height: 20px;
      vertical-align: top;
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
