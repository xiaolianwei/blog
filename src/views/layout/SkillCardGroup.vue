<template>
  <div class="sikll_card_grup">
    <p>技术分享</p>
    <ul class="clearfix">
      <li v-for="item in data" :key="item.id"><SkillCard :data="item"/></li>
    </ul>
  </div>
</template>

<script>
import SkillCard from '@/components/SkillCard.vue';
import article from '../../api/article';

export default {
  components: {
    SkillCard,
  },
  props: {
    number: {
      type: Number,
      default: Infinity,
    },
  },
  data() {
    return {
      articleData: [],
    };
  },
  computed: {
    data() {
      if (this.number !== Infinity) {
        const arr = this.articleData.slice();
        arr.sort(() => Math.random() - 0.5);
        this.$emit('get-article', arr.slice(this.number, this.number + 2));
        return arr.slice(0, this.number);
      }
      return this.articleData;
    },
  },
  methods: {
    handelShowNum() {
      if (this.number !== Infinity) {
        this.num = this.number;
      }
    },
  },
  async mounted() {
    const result = await article.getSkill();
    this.articleData = result;
    this.$emit('get-total', result.length);
  },
};
</script>

<style lang="less" scoped>
.sikll_card_grup{
  background-color: #fff;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 40px;

  p {
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    line-height: 40px;
    color: #484848;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 45px;
      height: 2px;
      background: #000;
      left: 0;
      bottom: 0;
      transition: all .5s;
    }

    &:hover::after{
      width: 80px;
    }
  }

  ul {
    width: 95%;
    margin: 20px auto 0;

    li {
      width: 28.3%;
      float: left;
      padding: 2.4%;
      border-bottom: 1px solid #eee;
      border-left: 1px solid #eee;
      transition: all .5s ease;

      &:hover {
        box-shadow: #ccc 1px 1px 8px;
      }
      &:hover /deep/ .img img{
        transform: scale(1.1);
      }
    }
  }
}
</style>
