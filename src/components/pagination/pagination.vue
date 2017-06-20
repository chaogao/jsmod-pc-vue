<template>
  <div class="jsmod-pagination">
    <ul class="jsmod-pagination-list">
      <li v-on:click="go(item.page)"  class="jsmod-pagination-list-item" v-for="item in renderDatas">
        <slot name="item" :page="item.page" :type="item.type" :disabled="item.disabled">
          <a href="javascript:void(0)" v-bind:class="getClass(item)">{{ getLabel(item) }}</a>
        </slot>
      </li>
    </ul>
  </div>
</template>


<script>
  import { PAGE_TYPE } from './index'

  import lang from '../utils/lang'

  let langInstance = lang.get();

  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },

      autoHide: {
        type: Boolean,
        default: false
      },

      pageCount: {
        type: Number
      },

      maxShowPage: {
        type: Number,
        default: 3
      },
    },

    data () {
      return {
        PAGE_TYPE: PAGE_TYPE,
        current: this.value
      }
    },

    computed: {
      renderDatas () {
        var self = this,
            renderDatas = [],
            start, end, offsetEnd, offsetStart;

        var page = this.current;

        if (this.pageCount <= 0) {
          return renderDatas;
        }

        // 最大显示页数只能小于总页数
        var maxShowPage = this.pageCount < this.maxShowPage ? this.pageCount : this.maxShowPage;

        // 纠正错误的 page
        page = page < 0 ? 0 : page;
        page = page > this.pageCount - 1 ? this.pageCount - 1 : page;

        // 计算中间的参数
        var flag = parseInt(maxShowPage / 3); // 分页渲染当前页的标识位

        // 计算开始、结束渲染的分页
        start = page - flag < 0 ? 0 : page - flag; // start 位置
        offsetEnd = page - flag < 0 ? Math.abs(page - flag) : 0; // end 的偏移

        end = page + (maxShowPage - flag) - 1 > this.pageCount - 1 ? this.pageCount - 1 : page + (maxShowPage - flag) -1; // end 位置
        offsetStart = page + (maxShowPage - flag) - 1 > this.pageCount - 1 ? Math.abs(page + (maxShowPage - flag) - 1 - (this.pageCount - 1)) : 0 // start 的偏移

        start -= offsetStart;
        end += offsetEnd;


        if (page > 0 || !this.autoHide) {
          renderDatas.push({
            type: PAGE_TYPE.PRE,
            page: page - 1,
            disabled: page == 0
          });
        }

        // 增加首页
        if (start > 0) {
            renderDatas.push({
              type: PAGE_TYPE.FIRST,
              page: 0
            });

            if (start > 1) {
              renderDatas.push({
                type: PAGE_TYPE.OMIT,
                page: null
              });
            }
        }

        // 处理页面信息
        for (start; start <= end; start++) {
          renderDatas.push({
            type: start == page ? PAGE_TYPE.CURRENT : PAGE_TYPE.PAGE,
            page: start
          });
        }

        // 增加末尾页面
        if (end < this.pageCount - 1) {

          if (end + 1 < this.pageCount - 1) {
            renderDatas.push({
              type: PAGE_TYPE.OMIT,
              page: null
            });
          }

          renderDatas.push({
            type: PAGE_TYPE.LAST,
            page: this.pageCount - 1
          });
        }

        if (page != this.pageCount - 1 || !this.autoHide) {
          renderDatas.push({
            type: PAGE_TYPE.NEXT,
            page: page + 1,
            disabled: page == this.pageCount - 1
          });
        }

        return renderDatas;
      }
    },

    watch: {
      value () {
        this.current = this.value;
      },

      current () {
        this.$emit('input', this.current);

        this.$emit('active', {
          page: this.current
        });
      }
    },

    methods: {
      getClass (item) {
        let itemClass = ['jsmod-pagination-list-item-link'];

        itemClass.push('jsmod-pagination-list-item-link-' + item.type);

        if (item.disabled) {
          itemClass.push('jsmod-pagination-list-item-link-disabled');
        }

        return itemClass;
      },

      getLabel (item) {
        if (item.type == PAGE_TYPE.PRE) {
          return langInstance.lang.prePage;
        }

        if (item.type == PAGE_TYPE.NEXT) {
          return langInstance.lang.nextPage;
        }

        if (item.type == PAGE_TYPE.OMIT) {
          return '...'
        }

        return item.page + 1;
      },

      go (page) {
        if (page < 0 || page > this.pageCount - 1) {
          return;
        }

        if (page !== null) {
          this.current = page;
        }
      }
    }
  }

</script>

<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-pagination
    .jsmod-pagination-list
      font-size: 0;

      .jsmod-pagination-list-item
        display: inline-block;
        font-size: 14px;
        margin-right: 10px;

        &:last-child
          margin-right: 0;

        .jsmod-pagination-list-item-link
          padding: 5px 10px;
          color: link-color;
          transition: background 0.3s;

          &:hover
            background: #efefef;

          &.jsmod-pagination-list-item-link-CURRENT,
          &.jsmod-pagination-list-item-link-OMIT,
          &.jsmod-pagination-list-item-link-disabled
            color: #999;
            cursor: text;

            &:hover
              background: none;


</style>
