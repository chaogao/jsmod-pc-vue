let code = {};

code.overview = {};

code.overview.zh = `
适用各类分页需求，默认提供简单的样式且可以通过[作用域插槽](https://vuefe.cn/v2/guide/components.html#作用域插槽)重写默认样式

* 使用 \`v-model\` 双向绑定页码
* 自定义页数展示个数
* 可自由定制的样式
`;


code.overview.en = `
\`ModPagination\` provide simple style, you can customize style and layout by [scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots)

* Use the \`v-model\` binding page number
* customize the number of page-label
* high degree of freedom of custom style
`;


code.base = `
\`\`\`javascript
<template>
  <mod-pagination v-model="current" :pageCount="10" v-on:active="onActive"></mod-pagination>

  <mod-button :inline="true" v-on:click="current = 2">点击跳转到第三页</mod-button>
</template>
\`\`\`
`;


code.count = {};
code.count.zh = `
使用 \`maxShowPage\` 配置控制分页显示的个数，具体解释如下：

1. 设置 \`maxShowPage\` = 5 \`pageCount\` = 20
2. 分页控件除去第一页，最后一页，总会显示 5 个页码（如果当前页为第一页或最后一页则显示4个页码）
3. 其余页码使用 \`...\` 替代

\`\`\`javascript
<template>
  <mod-pagination v-model="current" :maxShowPage="5" :pageCount="20"></mod-pagination>
</template>
\`\`\`
`;

code.count.en = `
\`maxShowPage\` set the number of page-label

1. set \`maxShowPage\` = 5 and \`pageCount\` = 20
2. in addition to the first page and last page, it always displays 5 page-label (4 page numbers if the current page is the first page or the last page)
3. others will replace with \`...\`


\`\`\`javascript
<template>
  <mod-pagination v-model="current" :maxShowPage="5" :pageCount="20"></mod-pagination>
</template>
\`\`\`
`;

code.spec = `
\`\`\`javascript
<template>
  <mod-pagination :pageCount="1" v-on:active="onActive"></mod-pagination>
  <mod-pagination :pageCount="2" v-on:active="onActive"></mod-pagination>
  <mod-pagination :pageCount="3" v-on:active="onActive"></mod-pagination>
</template>
\`\`\`
`

code.slot = {};

code.slot.zh = `
控件提供了简单的样式，但不能满足所有需求，学习使用[作用域插槽](https://vuefe.cn/v2/guide/components.html#作用域插槽)你可以轻松的套用自己的样式，开发步骤如下：

1. 获取所有分页可能的类型 \`this.$jsmod.pagination.PAGE_TYPE\`
  \`\`\`javascript
    const PAGE_TYPE = {
      FIRST: 'FIRST',  // 首页
      PRE: 'PRE', // 上一页
      PAGE: 'PAGE', // 普通的页码
      CURRENT: 'CURRENT', // 当前页
      NEXT: 'NEXT', // 下一页
      LAST: 'LAST', // 最后一页
      OMIT: 'OMIT' // 省略号
    };
  \`\`\`

2. 在 template 中实现每种页码的样式，scope 提供如下变量
  \`\`\`javascript
    {
      type: ..., // 分页的类型
      disabled: [true|false] // 页码功能是否可用
    }
  \`\`\`

具体代码如下：

\`\`\`javascript
<template>
  <mod-pagination v-model="current"  :pageCount="10" v-on:active="onActive">
    <template slot="item" scope="props" >
      <a v-if="props.type == PAGE_TYPE.PAGE || props.type == PAGE_TYPE.CURRENT"
        href="javasciprt:void(0)" :class="{'custom-link': true, 'custom-link-active': props.type == PAGE_TYPE.CURRENT}">{{ props.page + 1 }}</a>

      <a href="javasciprt:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.FIRST">首</a>
      <a href="javasciprt:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.LAST">尾</a>


      <a href="javasciprt:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.PRE">上</a>
      <a href="javasciprt:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.NEXT">下</a>

      <a v-if="props.type == PAGE_TYPE.OMIT">...</a>

    </template>
  </mod-pagination>
</template>

<script>
  export default {
    data () {
      return {
        PAGE_TYPE: this.$jsmod.pagination.PAGE_TYPE
      }
    }
  }
</script>
\`\`\`
`;

code.slot.en = `
it provide a simple style, use the [scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots) you can easily customize styles and layout , steps are as follows:

1. gets all possible types of page type from \`this.$jsmod.pagination.PAGE_TYPE\`
  \`\`\`javascript
    const PAGE_TYPE = {
      FIRST: 'FIRST',  // 首页
      PRE: 'PRE', // 上一页
      PAGE: 'PAGE', // 普通的页码
      CURRENT: 'CURRENT', // 当前页
      NEXT: 'NEXT', // 下一页
      LAST: 'LAST', // 最后一页
      OMIT: 'OMIT' // 省略号
    };
  \`\`\`

2. in the template to achieve the style of each page type, scope provides the following data
  \`\`\`javascript
    {
      type: ..., // page-label type
      disabled: [true|false] // whether current page-label is disabled
    }
  \`\`\`

code is as follows:

\`\`\`javascript
<template>
  <mod-pagination v-model="current"  :pageCount="10" v-on:active="onActive">
    <template slot="item" scope="props" >
      <a v-if="props.type == PAGE_TYPE.PAGE || props.type == PAGE_TYPE.CURRENT"
        href="javasciprt:void(0)" :class="{'custom-link': true, 'custom-link-active': props.type == PAGE_TYPE.CURRENT}">{{ props.page + 1 }}</a>

      <a href="javasciprt:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.FIRST">首</a>
      <a href="javasciprt:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.LAST">尾</a>


      <a href="javasciprt:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.PRE">上</a>
      <a href="javasciprt:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.NEXT">下</a>

      <a v-if="props.type == PAGE_TYPE.OMIT">...</a>

    </template>
  </mod-pagination>
</template>

<script>
  export default {
    data () {
      return {
        PAGE_TYPE: this.$jsmod.pagination.PAGE_TYPE
      }
    }
  }
</script>
\`\`\`
`;

export default code;
