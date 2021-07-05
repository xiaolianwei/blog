<template>
  <div class="NavBar">
    <div class="content">
      <img @click="drawer = true" src="https://www.zhangqinblog.com//templates/Images/menu.png" class="top_nav_open">
      <h1 class="logo" @click="goHome">肖连伟的个人博客</h1>
      <div class="right">
        <ul class="bar">
          <router-link to="/" tag="li">
            博客首页
          </router-link>
          <router-link :to="{name: 'SkillShare'}" tag="li">
            技术分享 <i class="iconfont icon-xiala1"></i>
          </router-link>
          <router-link :to="{name: 'ProgramView'}" tag="li">
            程序视野 <i class="iconfont icon-xiala1"></i>
          </router-link>
          <router-link :to="{name: 'MyCase'}" tag="li">
            案例练习 <i class="iconfont icon-xiala1"></i>
          </router-link>
          <router-link :to="{name: 'AboutMy'}" tag="li">
            关于我 <i class="iconfont icon-xiala1"></i>
          </router-link>
          <router-link :to="{name: 'Speak'}" tag="li">
            留言 <i class="iconfont icon-xiala1"></i>
          </router-link>
        </ul>
        <div class="search" @click="handelSearch">
          <img src="../../assets/image/search.png" />
        </div>
      </div>
    </div>
    <el-drawer
      title="移动端导航栏"
      :visible.sync="drawer"
      direction="ltr"
      :with-header="false"
      :modal-append-to-body="false"
      ref="drawer"
      :lockScroll="false"
    >
      <ul class="drawer-ul">
        <li @click="closeDrawer"><router-link to="/">博客首页</router-link></li>
        <li @click="closeDrawer"><router-link :to="{name: 'SkillShare'}">技术分享</router-link></li>
        <li @click="closeDrawer"><router-link :to="{name: 'ProgramView'}">程序视野</router-link></li>
        <li @click="closeDrawer"><router-link :to="{name: 'MyCase'}">案例练习</router-link></li>
        <li @click="closeDrawer"><router-link :to="{name: 'AboutMy'}">关于我</router-link></li>
        <li @click="closeDrawer"><router-link :to="{name: 'Speak'}">留言</router-link></li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
import article from '@/api/article';

export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    closeDrawer() {
      this.$refs.drawer.closeDrawer();
    },
    handelSearch() {
      this.$prompt('请搜索关键字', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true,
        lockScroll: false,
      }).then(({ value }) => {
        article.search(value).then((res) => {
          if (res.length === 0) {
            this.$message({
              type: 'error',
              message: '没有相关文章',
              center: true,
            });
            return;
          }
          if (this.$route.path !== '/search') {
            this.$router.push({ name: 'Search' });
          }
          this.$store.commit('headelSearch', value);
        });
      }).catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/assets/style/var.less';
.NavBar {
  height: 60px;
  background-color: #1c2327;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding-top: 5px;
  color: #eeebeb;
  z-index: 99;
  // transition: all 0.3s ease 0.1s;
  .top_nav_open {
    display: none;
  }

  &::before {
    content: "";
    height: 5px;
    position: absolute;
    top: 0;
    width: 100%;
    background: #000
      linear-gradient(
        to left,
        #4cd964,
        #5ac8fa,
        #007aff,
        #34aadc,
        #5856d6,
        #ff2d55
      );
  }

  .content {
    width: @totalWidth;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right{
      display: flex;
    }

    .logo {
      width: 179px;
      height: 40px;
      padding-top: 40px;
      box-sizing: border-box;
      overflow: hidden;
      background: url("../../assets/image/blogLogo.png") no-repeat;
      cursor: pointer;
    }

    .bar {
      width: 580px;
      display: flex;
      justify-content: space-between;
      margin-right: 40px;

      li {
        cursor: pointer;

        i {
          transition: transform 0.3s;
          display: inline-block;
          color: #A0A3A4;
        }

        &:hover{
          color: #66CDAA;
        }
        &:hover i{
          transform: rotate(180deg);
        }
      }
    }

    img {
      width: 26px;
      height: 26px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}

.drawer-ul li{
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #000;

  &:hover {
    color: #66CDAA;
  }
}

.router-link-exact-active {
  color: #66CDAA;

  i {
    transform: rotate(180deg);
  }
}
</style>
