let code = {};

code.overview = {};

code.overview.zh = `
此组件为 \`ModDialog\` 的子组件，footer 区域放置两个 \`ModButton\`（可以定制样式） 用于确认、取消。且可自定义 title, footer 中整体样式，适用各类不同的需求，但如需修改整体布局（例如确认按钮在标题上方），建议以 \`ModDialog\` 为基础开发。

* 使用 \`v-model\`绑定显示（隐藏）状态
* 使用 slot 简单的扩展自定义样式
`;


code.overview.en = `
This component is a subcomponent of \`ModDialog\`, and the footer area places two ModButton (which can be customized) for confrim and cancel. you also can customize the layout or styles of title, footer.

* use \`v-model\` directive bingding to display status
* use slot to simply customize style and layout
`;


code.base = `
\`\`\`javascript
<template>
  <mod-confirm v-model="show1"  content="确认付款？"></mod-confirm>
  <mod-button :inline="true" v-on:click="show1 = !show1" >显示</mod-button>
</template>
\`\`\`
`;

code.event = {};
code.event.zh = `
调用 \`e.preventDefault\` 阻止默认关闭事件

\`\`\`javascript

<template>
  <mod-confirm v-model="show2" v-on:click="onClick" content="确认付款？"></mod-confirm>
  <mod-button :inline="true" v-on:click="show2 = !show2" >处理回调</mod-button>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.$jsmod.toast.show({
          content: '点击了：' + (e.result ? '确认' : '取消')
        });
      }
    }
  }
</script>
\`\`\`
`;

code.event.en = `
use \`e.preventDefault \` to prevent the default hidden event

\`\`\`javascript

<template>
  <mod-confirm v-model="show2" v-on:click="onClick" content="确认付款？"></mod-confirm>
  <mod-button :inline="true" v-on:click="show2 = !show2" >处理回调</mod-button>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.$jsmod.toast.show({
          content: '点击了：' + (e.result ? '确认' : '取消')
        });
      }
    }
  }
</script>
\`\`\`
`;

code.button = {};


code.button.zh = `
通过 \`btnOkStyle\` \`btnNoStyle\` 来配置按钮的样式，但无法改变确认按钮的位置（比如让按钮靠右对齐）。如要特殊样式可以参照下面例子重写 \`slot\`


\`\`\`javascript
<template>
  <mod-button :inline="true" v-on:click="show3 = !show3" >显示</mod-button>

  <mod-confirm v-model="show3" content="确认付款？" :btnOk="'付款'" :btnNo="'不买了'"
      :btnOkStyle="buttonOkStyle" :btnNoStyle="buttonNoStyle">

  </mod-confirm>
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

code.button.en = `
Customize the style of the button by \`btnOkStyle\` \`btnNoStyle\`, but you can not change the position of the button (for example, let the button be right-aligned).
If you want to special style can refer to the following example use \`slot\`


\`\`\`javascript
<template>
  <mod-button :inline="true" v-on:click="show3 = !show3" >显示</mod-button>

  <mod-confirm v-model="show3" content="确认付款？" :btnOk="'付款'" :btnNo="'不买了'"
      :btnOkStyle="buttonOkStyle" :btnNoStyle="buttonNoStyle">

  </mod-confirm>
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
code.slot = {};

code.slot.zh = `
使用 \`title\`, \`footer\` slot 可自定义样式，\` footer \` 中用于确认的按钮元素请加入 \` mod-ok \` 标识，用于取消的加入 \`mod-no\` 标识


\`\`\`javascript
<template>
  <mod-button :inline="true" v-on:click="show4 = !show4" >
    显示
  </mod-button>

  <mod-confirm v-model="show4" content="确认付款？">
    <div class="custom-title" slot="title">
      自定义标题
    </div>

    <div class="custom-footer" slot="footer">
      <a mod-no href="javascript:void(0)">取消</a>
      <a mod-ok href="javascript:void(0)">确认</a>
    </div>
  </mod-confirm>
</template>
\`\`\`
`


code.slot.en = `
Use \`title\`, \`footer\` slot to customize the style, to confirm and cancel the buttonneed add \`mod-ok\` and \`mod-no\` directive

\`\`\`javascript
<template>
  <mod-button :inline="true" v-on:click="show4 = !show4" >
    显示
  </mod-button>

  <mod-confirm v-model="show4" content="确认付款？">
    <div class="custom-title" slot="title">
      自定义标题
    </div>

    <div class="custom-footer" slot="footer">
      <a mod-no href="javascript:void(0)">取消</a>
      <a mod-ok href="javascript:void(0)">确认</a>
    </div>
  </mod-confirm>
</template>
\`\`\`
`


code.api = `
\`\`\`javascript
<template>
  <mod-button :inline="true" v-on:click="showConfirm" >API调用</mod-button>
</template>

<script>
  export default {
    methods: {
      showConfirm () {
        this.$jsmod.confirm.show({
          content: 'api 显示的确认窗',
          onClick (e) {
            self.$jsmod.toast.show({
              content: '点击了：' + (e.result ? '确认' : '取消')
            });
          }
        })
      }
    }
  }
</script>
\`\`\`
`

export default code;
