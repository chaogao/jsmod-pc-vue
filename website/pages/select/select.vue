<i18n>
  {
    "en": {
      "eg_base": "Basic Usage: Two Display Three State ",
      "eg_base_block": "Base Button(block)",
      "eg_base_inline": "Base Button(inline)",
      "eg_base_loading": "Loading Button",
      "eg_base_disabled": "Disabled Button",
      "eg_option_style": "Use Option Custom Style",
      "eg_option_style_border": "Border Button",
      "eg_option_style_no_border": "No Border Button",
      "eg_option_style_disabled": "Option For Disabled Status Not Function",
      "eg_styleobj": "Use Style-Object Custom Style"
    },
    "zh": {
      "eg_base": "基础示例：的两种展示, 三种状态",
      "eg_base_block": "基础按钮(block)",
      "eg_base_inline": "基础按钮(inline)",
      "eg_base_loading": "加载中",
      "eg_base_disabled": "禁止使用",
      "eg_option_style": "使用选项自定义样式",
      "eg_option_style_border": "带 Border 按钮",
      "eg_option_style_no_border": "不显示 Border 按钮",
      "eg_option_style_disabled": "配置对 Disabled 状态按钮不起作用",

      "eg_styleobj": "使用样式对象自定义样式"
    }
  }
</i18n>


<template>
  <layout title="Button" source="button/index.vue"  >
    <div class="components-view">
      <div class="view-title">常规</div>

      <mod-select v-model="selectValue">
        <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
        <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
      </mod-select>

      <p>绑定v-model: {{ selectValue }}</p>

      <j-code :source="code.base"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">样式修改</div>

      <mod-select :customStyle="{width: '500px', height: '40px', backgroundColor: '#ff5a00', color: '#fff'}" placeholderColor="#fff" openedBorderColor="#fa0" v-model="selectValue">
        <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
        <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
      </mod-select>

      <j-code :source="code.style"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">事件</div>

      <mod-select v-model="selectValue3" @change="onChange">
        <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
        <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
      </mod-select>

      <j-code :source="code.event"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">外部（初始设定）改变</div>

      <mod-select v-model="selectValue4" >
        <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
        <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
      </mod-select>

      <a @click="selectValue4 = 2" href="javascript:void(0)">改变 {{ selectValue4 }}</a>

      <j-code :source="code.change"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">禁止使用</div>

      <mod-select :disabled="true" v-model="selectValue4" >
        <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
        <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
      </mod-select>

      <a @click="selectValue4 = 2" href="javascript:void(0)">改变 {{ selectValue4 }}</a>

      <j-code :source="code.disabled"></j-code>
    </div>

  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './select.code';

  export default {
    components: {
      Layout
    },

    data () {
      return {
        code: code,
        selectValue: '',
        selectValue2: '', 
        selectValue3: '',
        selectValue4: 1,
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
    },

    methods: {
      onChange (value) {
        this.$jsmod.toast.show({
          content: value
        });
      },

      onClick (index) {
        this.$jsmod.toast.show({
          content: '点我干嘛',
        });
      }
    }
  }
</script>

<style lang="stylus">
  .custom-button
    margin-bottom: 10px;

</style>
