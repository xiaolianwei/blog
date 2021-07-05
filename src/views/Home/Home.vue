<template>
  <div class="home">
    <div class="banner">
      <div class="left_box">
        <div class="carousel">
          <el-carousel trigger="click" height="260px">
            <el-carousel-item>
              <img src="https://www.zhangqinblog.com//./files/lifeDribs/images/2020-4-1.jpg">
            </el-carousel-item>
            <el-carousel-item>
              <img src="https://www.zhangqinblog.com//./files/lifeDribs/images/2019-9-6.jpg">
            </el-carousel-item>
            <el-carousel-item>
              <img src="https://www.zhangqinblog.com//./files/lifeDribs/images/2019-9-6-2.jpg">
            </el-carousel-item>
            <el-carousel-item>
              <img src="http://imgsrc.baidu.com/forum/cp%3Dtieba%2C10%2C620%3Bap%3D6kuaibo%BB%D6%B8%B4%B0%C9%2C90%2C628/sign=b4ba84cc9482d158afcf51f5e96f7bb9/574045d8f2d3572c746c9efe8213632763d0c39c.jpg">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="exhibit">
          <ul>
            <li v-for="article in articles" :key="article.id">
              <router-link
                target="_blank"
                :to="{name: 'Article', params: {id: article.contentUrl}}"
                :title="article.title">
                <img :src="article.coverImg">
                <span>{{ article.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right_box">
        <div class="synopsis">
          <h2>我的个人简介</h2>
          <p>标签：web前端工程师、零零后</p>
          <p>现居：湖南省-长沙市</p>
          <p>Email：2695772510@qq.com</p>
          <ul class="contact_link">
            <li>
              <router-link to="/" title="我的个人博客" class="blog"></router-link>
            </li>
            <li>
              <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=2695772510@qq.com" class="Email" title="邮箱"></a>
            </li>
            <li>
              <a href="tencent://Message/?Uin=2695772510&websiteName=www.oicqzone.com&Menu=yes" class="qq" title="QQ"></a>
            </li>
            <li>
              <a href="javascript:void(0)" title="我的微信" class="weixin"></a>
              <img class="myWeixin" src="../../assets/image/my-weixin.png">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content clearfix">
      <div class="left_box">
        <SkillCardGroup @get-article="articles = $event" :number="6" />
        <ViewCardGroup :number="4" />
      </div>
      <div class="right_box clearfix">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCardGroup from '../layout/SkillCardGroup.vue';
import ViewCardGroup from '../layout/ViewCardGroup.vue';
import Sidebar from '../layout/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    SkillCardGroup,
    ViewCardGroup,
    Sidebar,
  },
  data() {
    return {
      articles: [],
    };
  },
};
</script>

<style lang="less" scoped src="./Home.less"></style>
