let code = {};

code.overview = `
此组件为 \`ModDialog\` 的子组件，footer 区域放置一个 \`ModButton\`（可以定制样式） 用于确认。且可自定义 title, footer 中整体样式，适用各类不同的需求，但如需修改整体布局（例如确认按钮在标题上方），建议以 \`ModDialog\` 为基础开发。

* 使用 \`v-model\`绑定显示（隐藏）状态
* 使用 slot 简单的扩展自定义样式
`;


code.base = `
\`\`\`javascript
<template>
  <mod-button v-on:click="show1 = !show1" >显示</mod-button>
  <mod-alert v-model="show1"  content="购买成功！"></mod-alert>
</template>
\`\`\`
`;

code.event = `
调用 \`e.preventDefault\` 阻止默认关闭事件

\`\`\`javascript

<template>
  <mod-button :inline="true" v-on:click="show2 = !show2" >显示</mod-button>
  <mod-button :inline="true" v-on:click="show2_2 = !show2_2" >显示</mod-button>

  <mod-alert v-model="show2" v-on:click="onClick" content="购买成功！"></mod-alert>
  <mod-alert v-model="show2_2" v-on:click="onClick2" content="无法关闭，请刷新页面！"></mod-alert>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.$jsmod.toast.show({
          content: '点击了确认'
        });
      },

      onClick2 (e) {
        e.preventDefault();
      },
    }
  }
</script>
\`\`\`
`;

code.button = `
通过 \`buttonCustomStyle\` 来配置确认按钮的样式，但无法改变确认按钮的位置（比如让按钮靠右对齐）。如要特殊样式可以参照下面例子重写 \`slot\`


\`\`\`javascript
<template>
  <mod-button :inline="true" v-on:click="show3 = !show3" >显示</mod-button>
  <mod-alert :buttonCustomStyle="buttonStyle" v-model="show3" title="提示" btn="好贵！" content="购买成功！"></mod-alert>
</template>

<script>
  export default {
    data () {
      return {
        buttonStyle: {
          border: '1px solid #ff5a00',
          backgroundColor: '#fff',
          color: '#ff5a00',
          borderRadius: 0
        }
      }
    }
  }
</script>
\`\`\`
`


code.slot = `
使用 \`title\`, \`footer\` slot 可自定义样式，\` footer \` 中用于确认的按钮元素请加入 \` mod-confirm \` 标识


\`\`\`javascript
<template>
  <mod-button :inline="true" v-on:click="show4 = !show4" >
    显示
  </mod-button>

  <mod-alert v-model="show4" content="购买成功！">
    <div class="custom-title" slot="title">
      自定义标题
    </div>

    <div class="custom-footer" slot="footer">
      <a mod-confirm href="javascript:void(0)">关闭</a>
    </div>
  </mod-alert>
</template>
\`\`\`
`


code.api = `
\`\`\`javascript
<template>
  <mod-button v-on:click="showAlert" >API调用</mod-button>
</template>

<script>
  export default {
    methods: {
      showAlert () {
        this.$jsmod.alert.show({
          content: 'api 显示的确认窗'
        })
      }
    }
  }
</script>
\`\`\`
`

export default code;
