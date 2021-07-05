<template>
  <div id="app">
    <NabBar />
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
      <div class="content">
        <div class="MyWeChat">
          <img src="./assets/image/my-weixin.png">
          <p>我的微信</p>
        </div>
        <div class="copyright">
          <p>Copyright © www.xiaolianwei.com All Rights Reserved. </p>
          <p>备案号：<a href="https://beian.miit.gov.cn" target="_blank">暂时没有</a></p>
        </div>
      </div>
    </footer>
    <el-backtop :bottom="100">
      <div>
        <img src="https://www.zhangqinblog.com//templates/Images/backTop.png" alt="">
      </div>
    </el-backtop>
    <div class="github">
      <a href="https://github.com/xiaolianwei/blog" target="_blank">
          <img src="https://www.zhangqinblog.com//templates/Images/github.png">
      </a>
    </div>
  </div>
</template>

<script>

import NabBar from './views/layout/NavBar.vue';

export default {
  components: {
    NabBar,
  },
};
</script>

<style lang="less">
@import '~@/assets/style/var.less';
#app{
  padding-top: 60px;
  background-color: #E9EAED;

  &>.content{
    width: @totalWidth;
    margin: 0 auto;
    padding-bottom: 50px;
  }

  footer {
    background: #373D41;
    border-top: 10px solid #66CDAA;
    margin-top: 10px;
    color: #73777a;

    &>.content {
      width: 1200px;
      margin: 0 auto;
      padding: 30px 0;

      .MyWeChat {
        text-align: center;

        img {
          width: 100px;
        }
        p {
          text-align: center;
        }
      }

      .copyright {
        line-height: 20px;
        text-align: center;

        p {
          font-size: 14px;
          margin-bottom: 5px;

          a {
            text-decoration: underline;

            &:hover {
              color: #66CDAA;
            }
          }
        }
      }
    }
  }

  .el-backtop {
    background-color: transparent;
    box-shadow: none;
  }

  .github {
    position: fixed;
    right: 0;
    top: 50%;
    width: 40px;
    background: #333;
    z-index: 999;
    transform: translateY(-50%);
    border-radius: 5px 0 0 5px;

    img {
      width: 40px;
    }
  }
}
</style>
