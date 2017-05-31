<template>
  <mod-carousel ref="carousel" v-model="index" :fade="fade" :ratio="ratio" :loop="true" :height="height" :interval="interval" :current="current">
    <mod-carousel-item v-for="item, key in list" :key="key">
      <a v-bind:style="{background: background}" v-on:click="onClick(key, item)" class="jsmod-banner-link" v-bind:href="item.href ? item.href : 'javascript:void(0)'">
        <mod-image v-on:loaded="() => { onLoaded(key) }"
          :auto="calcAuto(key)"
          :scale="scale" height="100%"
          :src="item.src" >
            <div v-if="item.text" class="jsmod-banner-bottom-text">{{ item.text }}</div>
        </mod-image>
      </a>
    </mod-carousel-item>

    <div  class="jsmod-banner-ext" slot="ext">
      <span class="jsmod-banner-ext-current">{{ index + 1 }}</span> / {{ list.length }}
    </div>

    <div v-on:click="pre" class="jsmod-banner-control-left">
      <i :style="{'font-size': controlSize}" class="iconjsmod iconjsmod-xiangzuo1"></i>
    </div>

    <div  v-on:click="next" class="jsmod-banner-control-right">
      <i :style="{'font-size': controlSize}" class="iconjsmod iconjsmod-xiangyou1"></i>
    </div>
  </mod-carousel>
</template>

<script>
  import { ModCarousel, ModCarouselItem } from '../carousel';
  import { ModImage } from '../image';

  const ALLOW_SCALE_TYPES = ['cover', 'contain', 'none'];

  export default {
    components: {
      ModCarousel,
      ModCarouselItem,
      ModImage
    },

    props: {
      list: {
        type: Array
      },

      controlSize: {
        type: String,
        default: '16px'
      },

      height: {
        type: Number,
        default: 200
      },

      ratio: {
        type: Number,
      },

      loadedStep: {
        type: Number,
        default: 2
      },

      scale: {
        type: String,
        validator (value) {
          return ALLOW_SCALE_TYPES.indexOf(value) > -1;
        },
        default: 'cover'
      },

      interval: {
        type: Number,
        default: 3000
      },

      current: {
        type: Number,
        default: 0
      },

      fade: {
        type: Boolean,
        default: false
      },

      background: {
        type: String,
        default: '#fff'
      },
    },

    data () {
      return {
        index: this.current,
        loadedIndex: 0
      }
    },

    methods: {
      onClick (index, item) {
        this.$emit('click', {
          index: index,
          item: item
        });
      },

      pre () {
        this.$refs.carousel.pre();
      },

      next () {
        this.$refs.carousel.next();
      },

      calcAuto (key) {
        return key <= this.index + this.loadedStep;
      },

      onLoaded (key) {
        if (key > this.loadedIndex) {
          this.loadedIndex = key;
        }
      }
    }
  }

</script>

<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-banner-ext
    position: absolute;
    right: 5px;
    bottom: 6px;
    color: #dedede;
    font-size: 12px;

    .jsmod-banner-ext-current
      font-weight: bold;
      font-size: 14px;


  .jsmod-banner-control-left
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    min-width: 50px;
    width: 10%;

  .jsmod-banner-control-right
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    min-width: 50px;
    width: 10%;

  .jsmod-banner-control-left,
  .jsmod-banner-control-right
    cursor: pointer;
    transition: background 0.3s;
    z-index: 1;

    &:hover
      background: rgba(0, 0, 0, 0.1);

      i
        color: #efefef;

    i
      color: #fff;
      font-size: 16px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

  .jsmod-banner-bottom-text
    line();
    position: absolute;
    font-size: 14px;
    color: #fff;
    padding: 5px;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    left: 0;
    right: 0;
    color: #dedede;
    padding-right: 40px;

  .jsmod-banner-link
    width: 100%;
    height: 100%;
    display: block;


</style>
