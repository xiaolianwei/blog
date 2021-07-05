<template>
  <div class="view_card_group">
    <p>{{search ? '搜索结果' : '程序视野' }}</p>
    <ul>
      <li v-for="item in data" :key="item.id" ref="view_card">
        <ViewCard :data="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ViewCard from '@/components/ViewCard.vue';
import article from '../../api/article';

export default {
  props: {
    number: {
      type: Number,
      default: Infinity,
    },
  },
  data() {
    return {
      timeId: null,
      time: null,
      articleData: [],
    };
  },
  components: {
    ViewCard,
  },
  methods: {
    handelScroll() {
      try {
        if (!this.$refs.view_card) return;
        if (!this.time || Date.now() - this.time > 200) {
          const cardLi = this.$refs.view_card;
          for (let i = 0; i < cardLi.length; i += 1) {
            const el = cardLi[i];
            if (el.offsetTop - window.scrollY < window.innerHeight + 100) {
              el.classList.add('show');
              // console.log('=======', this.$refs.view_card);
            }
            if (el.offsetTop - window.scrollY > window.innerHeight + 100
            || el.offsetTop + el.offsetHeight < window.scrollY) {
              el.classList.remove('show');
            }
          }
          this.time = Date.now();
        }
      } catch (err) {
        // console.log(err);
      }
    },
  },
  computed: {
    ...mapState(['search']),
    data() {
      if (this.number !== Infinity) {
        const arr = this.articleData.slice();
        return arr.sort(() => Math.random() - 0.5).slice(0, this.number);
      }
      return this.articleData;
    },
  },
  watch: {
    search() {
      article.search(this.search).then((res) => {
        this.articleData = res;
      });
    },
  },
  async created() {
    try {
      window.addEventListener('scroll', this.handelScroll);
    } catch (err) {
      // console.log(err)
    }
    let result;
    if (this.search) {
      result = await article.search(this.search);
    } else {
      result = await article.getView();
    }
    this.articleData = result;
    this.$emit('get-total', result.length);
  },
  updated() {
    setTimeout(() => {
      this.handelScroll();
      // console.log('-------', this.$refs.view_card);
    }, 100);
  },
};
</script>

<style lang="less" scoped>
.view_card_group {
  background-color: #fff;
  margin-top: 20px;
  padding-top: 20px;
  border-radius: 4px;

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
    margin-top: 20px;
    padding-bottom: 20px;

    li {
      width: 95%;
      padding: 0 2.5% 20px;
      margin: 0 auto 20px;
      border-bottom: 1px dashed #eee;
      position: relative;
      top: 50px;
      opacity: 0;
      transition: all 0.5s ease;

      &.show {
        top: 0;
        opacity: 1;
      }

      &:hover {
        box-shadow: 0 3px 5px rgb(234 234 234);

        /deep/ .title span {
          color: #20B2AA;
        }

        /deep/ .img img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
