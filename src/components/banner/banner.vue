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

    <div class="jsmod-banner-ext" slot="ext">
      <span class="jsmod-banner-ext-current">{{ index + 1 }}</span> / {{ list.length }}
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
