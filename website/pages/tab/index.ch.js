let code = {};

code.overview = `
\`ModTab\` 简化了分栏功能的开发，默认提供简单样式。为实现最大自由度的样式定制，你可以使用[作用域插槽](https://vuefe.cn/v2/guide/components.html#作用域插槽)重写默认样式，示例三将详细说明
`

code.base = `
\`\`\`javascript
<template>
  <mod-tab>
    <mod-tab-item label="项目A(click)">
      <div class="tab-content">
        <p>这是标签栏目1</p>
      </div>
    </mod-tab-item>

    <mod-tab-item label="项目B(click)">
      <div class="tab-content">
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
      </div>
    </mod-tab-item>
  </mod-tab>

  <mod-tab trigger="hover">
    <mod-tab-item label="项目A(hover)">
      <div class="tab-content">
        <p>这是标签栏目1</p>
      </div>
    </mod-tab-item>

    <mod-tab-item label="项目B(hover)">
      <div class="tab-content">
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
      </div>
    </mod-tab-item>
  </mod-tab>
</template>
\`\`\`
`;

code.fade = `
\`\`\`javascript
<template>
  <mod-tab v-on:active="onActive" :fade="true">
    <mod-tab-item label="项目A">
      <div class="tab-content">
        <p>这是标签栏目1</p>
        <p>这是标签栏目1</p>
        <p>这是标签栏目1</p>
      </div>
    </mod-tab-item>

    <mod-tab-item label="项目B">
      <div class="tab-content">
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
      </div>
    </mod-tab-item>
  </mod-tab>
</template>
\`\`\`
`;

code.slot = `
为了带来高自由度的样式开发，\`ModTab\` 设计了比较复杂的自定义方案，实现自定义样式你需要了解：

1. 设置 \`tabContainerClass\` 为分类卡片容器增加样式类
2. 设置 \`tabClass\` 为分类项目增加样式类
3. 设置 \`containerClass\` 为内容容器增加样式类
4. 为 \`ModTabItem\` 设置 \`data\` 传入自定义数据
5. 使用[作用域插槽](https://vuefe.cn/v2/guide/components.html#作用域插槽)实现分类项目的自定义样式、DOM结构

示例如下：

\`\`\`javascript
<template>
  <mod-tab :tabContainerClass="'custom-container-tab'"  :containerClass="'custom-container'">
    <template slot="tab" scope="props">
      <span :class="{'custom-tab': true, 'custom-tab-active': props.active}">
        {{ props.label }}
        <span class="badge" v-if="props.data.count">{{ props.data.count }}</span>
      </span>
    </template>

    <mod-tab-item label="项目A" :data="{count: 2}">
      <div class="tab-content">
        <p>这是标签栏目1</p>
        <p>这是标签栏目1</p>
        <p>这是标签栏目1</p>
        <mod-image :width="300" :ratio="0.8" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg"></mod-image>
      </div>
    </mod-tab-item>

    <mod-tab-item label="项目B">
      <div class="tab-content">
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
        <p>这是标签栏目2</p>
      </div>
    </mod-tab-item>
  </mod-tab>
</template>

<style lang="stylus">

.custom-container
  border: 1px solid ##e41b23;

.custom-container-tab
  padding-left: 10px;

  .custom-tab
    margin-bottom: -1px;
    display: inline-block;
    margin-right: 10px;
    padding: 10px;
    text-align: center;
    border: 1px solid ##e41b23;
    background: #fff;

    .badge
      display: inline-block;
      background: ##e41b23;
      color: #fff;
      border-radius: 15px;
      line-height: 20px;
      width: 20px;
      text-align: center;


    &.custom-tab-active
      border-bottom: 1px solid #fff;
      position: relative;
      z-index: 1;
      color: ##e41b23;

</style>

\`\`\`

`;

export default code;
