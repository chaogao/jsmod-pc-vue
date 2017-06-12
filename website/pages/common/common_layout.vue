<template>
	<div id="common-layout">
		<common-header v-bind:onRigthBtn="onRigthBtn" v-if="showHeader" v-bind:hideBack="hideBack" v-bind:title="title" v-bind:OrderTip="OrderTip" v-bind:isService="isService" v-bind:isTitle="isTitle">
      <span v-if="rightBtn" v-html="rightBtn"></span>
		</common-header>

    <div v-if="showSource" class="common-footer-source">
      <a :href="'https://github.com/chaogao/jsmod-pc-vue/tree/master/website/pages/' + source ">
        <i class="iconjsmod iconjsmod-sousuo"></i>
        <span>本例源码</span>
      </a>

      <a class="show-api" href="javascript:void(0)" v-on:click="() => { this.$emit('api'); this.showApi = true;}">
        <i class="iconjsmod iconjsmod-question"></i>
        <span>显示API</span>
      </a>

    </div>

    <mod-layer v-if="api" direction="horizontal" width="80%" v-model="showApi">
      <j-code :api="true" :source="api"></j-code>
    </mod-layer>

		<slot v-if="isShowNotFound" name="header">
			<common-header v-bind:title="'找不到页面'"></common-header>
		</slot>

		<div v-if="!isShowNotFound" v-bind:style="{minHeight: this.winHeight + 'px'}" v-bind:class="['container', containerClass, {'has-footer': !hideFooter}]">
			<slot></slot>
		</div>

		<slot v-if="!isShowNotFound" name="footer">
			<common-footer :source="source" v-if="!hideFooter" v-bind:footerTab="footerTab"></common-footer>
		</slot>
	</div>
</template>

<script>
import CommonHeader from './common_header';
import CommonFooter from './common_footer';

export default {
	name: 'common-layout',
	data () {
		return {
			winHeight: this.containerClass == 'container-gray' ? (window.outerHeight || window.innerHeight) - 45 : 0,
      showApi: false
		}
	},

	props: ['title', 'hideFooter', 'containerClass', 'isShowNotFound', 'footerTab', 'hideBack', 'rightBtn', 'onRigthBtn', 'OrderTip', 'isService', 'isTitle', 'source', 'api'],

  computed: {
    showHeader () {
      let inIframe = window.location.href.indexOf('iframe') > 0;

      return !inIframe;
    },

    showSource () {
      let inIframe = window.location.href.indexOf('iframe') > 0;

      return !inIframe && this.source;
    }
  },

	components: {
		CommonHeader,
		CommonFooter
	}
}
</script>

<style scoped lang="stylus">
  @import "~website/assets/mixin"

	.container {
	  padding-left: 15px;

		&.container-gray {
			background: #EAEAEA;
		}
	}


	.fade-leave {
		display: none;
	}

	.fade-leave-active {
		display: none;
	}

	.fade-enter-active {
		transition: opacity 1s;

		.container {
			transition: opacity 1s;
			opacity: 1;
		}
	}

	.fade-enter {
		transition: opacity 1s;

		.container {
			transition: opacity 1s;
			opacity: 0;
		}
	}


  .common-footer-source {
    margin-bottom: 5px;
    padding-left: 15px;


    a {
      color: main-color;
      text-align: left;
      display: inline-block;
      padding: 10px 15px;

      &:hover {
        background: #efefef;
      }
    }

    .show-api {
      position: fixed;
      right: 10px;
      top: 100px;
      background: #f7f7f7;
      z-index: 99;
    }

    i {
      margin-top: 3px;
    }
  }
</style>
