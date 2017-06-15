let code = {};

code.overview = {};

code.overview.zh = `
此组件为 \`ModDialog\` 的子组件，用于轻提示；可在四种状态间切换（\`default\` \`loading\` \`success\` \`error\`），设置 \`timeout\` 可自动隐藏，使用 \`API\` 方式操作会比较方便
`

code.overview.en = `
\`ModToast\` is a sub-component of \`ModDialog\`, can be switched between the four states (\`default\` \`loading\` \`success\` \`error\`). set \`timeout\` can be automatically hidden, use \`API \` will be more convenient
`

code.base = {};

code.base.zh = `
除了 \`loading\` 状态其他状态下显示 \`toast \` 会在 1.5s 后自动隐藏

\`\`\`javascript
<template>
  <mod-toast v-model="show1" content="默认样式弹窗"></mod-toast>
  <mod-toast v-model="show2" type="loading"></mod-toast>
  <mod-toast v-model="show3" type="success"></mod-toast>
  <mod-toast v-model="show4" type="error"></mod-toast>


  <mod-button :inline="true" v-on:click="show1 = !show1" >显示</mod-button>
  <mod-button :inline="true" v-on:click="show2 = !show2" >显示Loading</mod-button>
  <mod-button :inline="true" v-on:click="show3 = !show3" >显示Success</mod-button>
  <mod-button :inline="true" v-on:click="show4 = !show4" >显示Error</mod-button>
</template>
\`\`\`
`;

code.base.en = `
in addition to \`loading \` state, others will automatically hide after 1.5s
\`\`\`javascript
<template>
  <mod-toast v-model="show1" content="默认样式弹窗"></mod-toast>
  <mod-toast v-model="show2" type="loading"></mod-toast>
  <mod-toast v-model="show3" type="success"></mod-toast>
  <mod-toast v-model="show4" type="error"></mod-toast>


  <mod-button :inline="true" v-on:click="show1 = !show1" >显示</mod-button>
  <mod-button :inline="true" v-on:click="show2 = !show2" >显示Loading</mod-button>
  <mod-button :inline="true" v-on:click="show3 = !show3" >显示Success</mod-button>
  <mod-button :inline="true" v-on:click="show4 = !show4" >显示Error</mod-button>
</template>
\`\`\`
`;

code.api = {};

code.api.zh = `
创建实例后，建议保存在变量中，便于后续操作，调用 hide（show） 方法可以隐藏（显示）

\`\`\`javascript

<template>
  <mod-button :inline="true" v-on:click="showToast" >API 调用</mod-button>
  <mod-button :inline="true" v-on:click="showToast2" >API 调用并修改实例</mod-button>
  <mod-button :inline="true" v-on:click="showToast3" >监听隐藏</mod-button>
</template>

<script>
  export default {
    methods: {
      showToast () {
        this.$jsmod.toast.show({
          content: 'api 显示的确认窗'
        })
      },

      showToast2 () {
        let toast = this.$jsmod.toast.show({
          type: 'loading'
        });

        setTimeout(() => {
          toast.type = 'success';

          setTimeout(() => {
            toast.hide();
          }, 1000);
        }, 2000);
      },

      showToast3 () {
        let toast = this.$jsmod.toast.show({
          content: 'api 显示',
          onHide: () => {
            this.$jsmod.toast.show({
              content: '刚刚那个隐藏了，我是新的toast'
            })
          }
        });
      }
    }
  }
</script>
\`\`\`
`

code.api.en = `
after creating an instance, it is recommended to save it in a variable for later operations.

\`\`\`javascript

<template>
  <mod-button :inline="true" v-on:click="showToast" >API 调用</mod-button>
  <mod-button :inline="true" v-on:click="showToast2" >API 调用并修改实例</mod-button>
  <mod-button :inline="true" v-on:click="showToast3" >监听隐藏</mod-button>
</template>

<script>
  export default {
    methods: {
      showToast () {
        this.$jsmod.toast.show({
          content: 'api 显示的确认窗'
        })
      },

      showToast2 () {
        let toast = this.$jsmod.toast.show({
          type: 'loading'
        });

        setTimeout(() => {
          toast.type = 'success';

          setTimeout(() => {
            toast.hide();
          }, 1000);
        }, 2000);
      },

      showToast3 () {
        let toast = this.$jsmod.toast.show({
          content: 'api 显示',
          onHide: () => {
            this.$jsmod.toast.show({
              content: '刚刚那个隐藏了，我是新的toast'
            })
          }
        });
      }
    }
  }
</script>
\`\`\`
`

export default code;
