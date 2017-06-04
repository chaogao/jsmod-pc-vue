let code = {};

code.overview = `
\`ModPopover\` 组件为所有气泡提示组件的基础，\`tooltip\`, \`dropdown\` 都是由其扩展。组件提供了丰富的 api，并可以消除（修改）所有默认样式带来最大自由度的气泡类需求的开发：

* 无需定义宽高，组件根据定位方式自动定位且内容更新后会更新定位
* 角标(arrow)为可配置项目：大小，颜色（内容、边框），是否启用都可自由配置
* 通过 \`v-model\` 显示（隐藏）的双向绑定

`

code.base = `
\`\`\`javascript
<template>
  <mod-popover target-type="right, top, center">
    <mod-button :inline="true" >鼠标点击</mod-button>

    <div class="my-content" slot="content">
      hello jsmod
    </div>
  </mod-popover>

  <mod-popover trigger="hover" target-type="bottom">
    <mod-button :inline="true">鼠标划过</mod-button>

    <div class="my-content" slot="content">
      hello jsmod
    </div>
  </mod-popover>
</template>
\`\`\`
`;


code.position = `
targetType 参数由三个字段组成，每个字段可选值有\`top\`, \`bottom\`, \`left\`, \`right\`, \`center\` （center可以省略）

对于参数 \`top, left, right\` 解释如下：

1. 第一个值选择了 \`top\`，表示在目标元素上方
2. 第二个值选择了 \`left\` 表示在目标元素的左上角的中间
3. 第三个元素选择了 \`right\` 表示在目标元素左上角的右侧
`

code.arrow = `
\`\`\`javascript
<template>
  <mod-popover trigger="hover" :arrow="false">
    <mod-button :inline="true" >不使用角标</mod-button>

    <div class="my-content" slot="content">
      hello jsmod
    </div>
  </mod-popover>

  <mod-popover trigger="hover" target-type="top" :arrowSize="30" arrow-color="#4ad1c6" arrow-border-color="#e41b23">
    <mod-button :inline="true">自定义角标样式</mod-button>

    <div class="my-content-color" slot="content">
      hello jsmod
    </div>
  </mod-popover>
</template>
\`\`\`
`


code.hover = `
\`\`\`javascript
<template>
  <mod-popover trigger="hover" :showDelay="1000">
    <mod-button :inline="true" >移入1s后显示</mod-button>

    <div class="my-content" slot="content">
      hello jsmod
    </div>
  </mod-popover>

  <mod-popover trigger="hover" :hideDelay="1000">
    <mod-button :inline="true" >移出1s后隐藏</mod-button>

    <div class="my-content" slot="content">
      hello jsmod
    </div>
  </mod-popover>
</template>
\`\`\`
`

code.event = `
\`\`\`javascript
<template>
  <mod-popover target-type="bottom" :offset="{top: -1}" :arrow="false" trigger="hover" v-on:onShow="show = 1" v-on:onHide="show = 0">
    <a :class="{'my-order': true, 'active': show}" href="javascript:void(0)">
      我的订单 <i class="iconjsmod iconjsmod-xiangxia2"></i>
    </a>

    <div class="my-content no-border" slot="content">
      hello jsmod
    </div>
  </mod-popover>
</template>

<script>
  export default {
    data () {
      return {
        show: 0
      }
    }
  }
</script>
\`\`\`
`

code.offset = `
\`\`\`javascript
<template>
  <mod-popover target-type="top" :offset="{top: -10, left: 50}" trigger="hover">
    <mod-button :inline="true" >移入</mod-button>

    <div class="my-content" slot="content">
      hello jsmod
    </div>
  </mod-popover>
</template>

\`\`\`
`

code.updatePos = `
\`\`\`javascript
<template>
  <mod-popover target-type="top"   v-on:onShow="loadData">
    <mod-button :inline="true" >点击</mod-button>

    <div :class="{'my-loading': true, 'loaded': !!loadedData}" slot="content">
      <div v-if="loadedData">
        <div class="data-item" v-for="item in loadedData">
          <div class="data-name">{{ item.name }}</div>
          <div class="data-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </mod-popover>
</template>

<script>
  export default {
    data () {
      return {
        loadedData: null
      }
    },

    methods: {
      loadData () {
        setTimeout(() => {
          this.loadedData = [
            {
              name: 'CDLIST',
              desc: 'CMS系统快速构建列表应用'
            },
            {
              name: 'JSMOD MOBILE',
              desc: '桌面端面向用户产品的 vue 组件库'
            },
            {
              name: 'JSMOD PC',
              desc: '移动端面向用户产品的 vue 组件库'
            }
          ];
        }, 500);
      }
    }
  }
</script>

\`\`\`
`

code.manual = `
    // 使用 v-model 绑定显示|隐藏状态

    <template>
      <mod-popover target-type="top" v-model="show2" trigger="manual">
        <mod-button :inline="true" @click="show2 = true">点击显示</mod-button>

        <div class="my-content" slot="content">
          <a href="javascript:void(0)" @click="show2 = false">关闭</a>
        </div>
      </mod-popover>
    </template>

    <script>
      export default {
        data () {
          return {
            show2: false
          }
        }
      }

    </script>
`

code.background = `
\`\`\`javascript
<template>
  <mod-popover :background="false" trigger="click"  :arrow="false" :offset="{left: -110}">
    <mod-button >点击显示</mod-button>

    <mod-image slot="content" :width="260" :height="405" src="https://oajua4pqj.qnssl.com/o_1bhj8vas16rk1ffc1jhj1uhc13sg7.png"></mod-image>
  </mod-popover>
</template>
\`\`\`
`

export default code;
