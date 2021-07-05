<template>
  <div class="skill-share">
    <div class="content clearfix">
      <div class="left_box">
        <SkillCardGroup @get-total="getTotal" />
        <el-pagination
          background
          layout="prev, pager, next"
          :pager-count="5"
          :page-size="12"
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
import SkillCardGroup from './layout/SkillCardGroup.vue';
import Sidebar from './layout/Sidebar.vue';

export default {
  components: {
    SkillCardGroup,
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
.skill-share {
  .layout();
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
</style>
