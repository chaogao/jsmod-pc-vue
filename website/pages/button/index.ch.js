let code = {};

code.overview = `
\`ModButton\` 提供了简单创建按钮的功能，并可实现三种状态切换。

* 通过 props 配置按钮各种颜色
* 通过 \`customStyle\` 样式对象自由定义扩展样式
* 禁用时不会触发 \`click\` 事件


**虽然 \`ModButton\` 提供了丰富的扩展功能，但依旧不建议在用户产品中使用，有时会因此画蛇添足（例如：按钮为复杂的图形，并带有背景图，\`hover\` 上有背景图的偏移）**

`

code.base = `
\`\`\`javascript
<template>
  <mod-button class="custom-button">默认（block）</mod-button>

  <mod-button :inline="true" v-on:click="onClick">默认</mod-button>
  <mod-button :inline="true" status="loading" >
    <span slot="loading">加载中</span>
  </mod-button>
  <mod-button :inline="true" status="disabeld" >禁止使用</mod-button>
</template>
\`\`\`
`;

code.props = `
\`\`\`javascript
<template>
  <mod-button :backgroundColor="'#fff'" :borderColor="'#f55a00'" :color="'#f55a00'" :inline="true">显示border</mod-button>
  <mod-button :backgroundColor="'#f55a00'"  :color="'#ff'" :inline="true">隐藏border</mod-button>
  <mod-button :backgroundColor="'#f55a00'"  :color="'#ff'" :inline="true" status="disabeld">disabeld配置颜色不起作用</mod-button>
</template>
\`\`\`
`;

code.style = `
\`\`\`javascript
<template>
  <mod-button :customStyle="customStyle" :inline="true">自由配置</mod-button>
</template>

<script>
  export default {
    data () {
      return {
        customStyle: {
          borderRadius: 0,
          width: '100px',
          height: '50px',
          lineHeight: '50px',
          padding: 0,
          backgroundColor: '#fa0',
          color: '#fff'
        }
      }
    }
  }
</script>
\`\`\`
`;

export default code;
