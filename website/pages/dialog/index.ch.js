let code = {};

code.overview = `
\`ModDialog\`为弹出层的基础组件，\`ModAlert\` \`ModConfirm\` \`ModToast\` 都是其子组件，在实现特定弹出层组件需求时建议直接扩展本组件。

* 使用 \`v-model\` 绑定显示（隐藏）状态
* 无需设置宽高（如果固定建议还是设置），可自动计算位置
* 使用 \`heade\` \`footer\` slot 可简单实现首尾三段布局
`;

code.base = `
\`\`\`javascript
<template>
  <mod-dialog v-model="show1">
    <div class="base-dialog">
      hello jsmod
    </div>
  </mod-dialog>

  <mod-dialog v-model="show1_1" :width="200" :height="200">
    <div class="base-dialog">
      hello jsmod
    </div>
  </mod-dialog>

  <mod-dialog v-model="show1_2" width="80%" height="80%">
    <div class="base-dialog">
      hello jsmod
    </div>
  </mod-dialog>

  <mod-button :inline="true" v-on:click="show1 = !show1" >显示（自动宽高）</mod-button>
  <mod-button :inline="true" v-on:click="show1_1 = !show1_1" >显示（固定值）</mod-button>
  <mod-button :inline="true" v-on:click="show1_2 = !show1_2" >显示（固定百分比）</mod-button>
</template>
`;


code.offset = `
\`\`\`javascript
<template>
  <mod-dialog v-model="show2" :offsetTop="-200">
    <div class="base-dialog">
      hello jsmod
    </div>
  </mod-dialog>

  <mod-button :inline="true" v-on:click="show2 = !show2" >显示</mod-button>
</template>
`;


code.update = `
\`\`\`javascript
<template>
  <mod-dialog v-model="show3" >
    <div class="base-scroll">
      <div v-for="item in list2" clas="base-dialog-item">{{ item }}</div>

      <mod-button v-on:click="list2.push('一条数据')" >添加</mod-button>
    </div>
  </mod-dialog>

  <mod-button :inline="true" v-on:click="show3 = !show3" >显示</mod-button>
</template>

<script>
  export default {
    data () {
      return {
        list2: ['一条数据']
      }
    }
  }
</script>
`;


code.mask = `
\`\`\`javascript
<template>
  <mod-dialog v-model="show4" :useMask="false">
    <div class="base-dialog">
      hello jsmod

      <mod-button v-on:click="show4 = false" >关闭</mod-button>
    </div>
  </mod-dialog>

  <mod-button :inline="true" v-on:click="show4 = !show4" >显示</mod-button>
</template>
`;

code.complex = `
使用 \`header\` \`footer\` slot 可以将弹层拆分为三段布局，设置的高度为整体高度，例如：

1. 整体设置 500px 高度
2. \`header\` 占用 50px \`footer\` 占用 150px
3. 内容区域为 350px 高的可滚动容器

\`\`\`javascript

<template>
  <mod-dialog :height="500" width="40%" v-model="show6" >
    <div slot="header" class="base-header">
      商品描述
    </div>

    <div class="base-scroll">
      <div class="product-title">新款单排扣牛仔半身裙弹力牛仔短裙</div>

      <div class="product-imgs">
        <img src="https://oajua4pqj.qnssl.com/o_1bep544eefrinqris5qdu113qh.jpg">
        <img src="https://oajua4pqj.qnssl.com/o_1bep529r267e1vnscrja5ouclc.jpg">

      </div>
    </div>

    <div slot="footer" class="base-footer">
      <mod-button  :status="checkoutStatus" v-on:click="checkout">
        结算
        <span slot="loading">结算中</span>
      </mod-button>
    </div>
  </mod-dialog>

  <mod-button :inline="true" v-on:click="show6 = !show6" >显示</mod-button>
</template>
`;

code.opacity = `
\`\`\`javascript
<template>
  <mod-dialog  v-model="show7" :backgroundColor="false" >
    <mod-image :width="400" :ratio="1" src="https://oajua4pqj.qnssl.com/o_1bhto5e7k15lq1j3513ufjtv1gfr7.png"></mod-image>
  </mod-dialog>

  <mod-button :inline="true" v-on:click="show7 = !show7" >显示</mod-button>
</template>
\`\`\`
`


code.api = `
\`\`\`javascript
<template>
  <mod-button v-on:click="showDialog" >API调用</mod-button>
</template>

<script>
  export default {
    methods: {
      showDialog () {
        this.$jsmod.dialog.show({
          html: 'api显示的弹窗'
        })
      }
    }
  }
</script>
\`\`\`
`


export default code;
