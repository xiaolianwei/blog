<template>
  <div class="program-view">
    <div class="content clearfix">
      <div class="left_box">
        <ViewCardGroup @get-total="getTotal" />
        <el-pagination
          background
          layout="prev, pager, next"
          :pager-count="5"
          :page-size="7"
          :total="total">
        </el-pagination>
      </div>
      <div class="right_box">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import ViewCardGroup from './layout/ViewCardGroup.vue';
import Sidebar from './layout/Sidebar.vue';

export default {
  components: {
    ViewCardGroup,
    Sidebar,
  },
  data() {
    return {
      total: null,
    };
  },
  methods: {
    getTotal(total) {
      this.total = total;
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/assets/style/var.less';
.program-view {
  .layout();

  .left_box {
    margin-top: -20px;

    .el-pagination {
      text-align: center;
      margin-top: 15px;

      /deep/ li.number:hover {
        color: #66CDAA !important;
      }
      /deep/ li.active {
        background-color: #66CDAA !important;
      }
    }
  }
}
</style>
