<template>
  <div class="AboutMy">
    <div class="wrap">
      <div class="ab_box clearfix">
        <div class="head_img">
          <img src="../assets/image/head_img.jpg" alt="">
        </div>
        <h3>肖连伟</h3>
        <p>一个零零后草根，Web前端工程师，程序员</p>
        <p>欢迎您，来到我的个人博客，虽然我们未曾见过，但您仍是我生命中一个重要的过客</p>
      </div>
      <h2>内心独白</h2>
      <p class="ab_dubai">作为一个零零后草根还是要不断努力的，
        19年大一的下学期接触到了前端，从此走上一条编程之路。俗话说师傅领进门、
        修行靠个人，学校教的太过简单于是开始自学前端，从入门的HTML、CSS、
        JS到后期的框架vue、在到node学习的过程总是漫长的，因为前端没有最佳实践还没形成一套固
        定的模式不像后端那样已经很成熟了，所以需要学习很多的东西。不过我已经喜欢上了前端，享受坐在电脑前敲代码的样子，我感觉我已经深深的陷入进去了，这辈子都出不来了。</p>
      <div class="explain">
        <img src="https://www.zhangqinblog.com/templates/Images/xiaoxi.png" alt="">
        本博客已经开源，源码已经上传到github了，本博客采用Node + MySQL。前端采用响应式布局、HTML + CSS3 + JS + Vue + VueRouter + ElementUi，并使用了SSR技术做了服务端渲染
      </div>
    </div>
  </div>
</template>

<script>
/* eslint max-len:off */
export default {

};
</script>

<style lang="less" scoped>
@import '~@/assets/style/var.less';
.AboutMy {
  margin: 20px auto 0;

  .wrap {
    background: url('http://jxhx-jcb.ip3q.com/skin/jxhx/images/abbg.png') no-repeat right top #fff;
    padding: 20px 40px;
    border-radius: 3px;
    margin-bottom: 20px;

    .ab_box {
      margin: 20px 0;

      .head_img {
        float: left;
        margin-right: 10px;
        background: linear-gradient(to top right, rgba(0,153,255,.9), rgba(42,228,197,.7));
        padding: 2px;
        width: 80px;
        border-radius: 50%;
        position: relative;

        img {
          width: 100%;
          display: block;
          border-radius: 50%;
        }

        &::before {
          position: absolute;
          content: "";
          background: url('http://jxhx-jcb.ip3q.com/skin/jxhx/images/v.png') no-repeat;
          bottom: 0px;
          right: 10px;
          height: 24px;
          width: 24px;
          background-size: 24px;
        }
      }

      h3 {
        margin: 10px 0 10px;
        font-size: 18px;
      }

      p {
        color: #666;
        margin-bottom: 5px;
      }
    }

    h2 {
      margin: 20px 0;
      font-size: 18px;
      background: url('http://jxhx-jcb.ip3q.com/skin/jxhx/images/hline.png') no-repeat bottom right;
      width: 120px;
      background-size: 40px;
      border-bottom: #000 1px dashed;
      padding-left: 10px;
      padding-bottom: 5px;
    }

    .ab_dubai {
      margin-bottom: 15px;
    }

    .explain {
      background: #F6F6F4;
      padding: 10px;
      line-height: 28px;
      margin: 40px auto 20px;
      color: #0609308a;

      img {
        width: 20px;
        margin-right: 2px;
        position: relative;
        top: 4px;
      }
    }
  }
}
</style>
