<template>
  <layout title="Carousel" source="carousel/index.vue" :api="api">

    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础实例，两种切换效果</div>

      <div class="carousel-line">
        <mod-carousel class="carousel-line-item" ref="ca" v-model="index" v-on:swiped="onSwiped" :height="160">
          <mod-carousel-item v-for="item, key in list1" :key="key">
            <div class="demo-carousel-inner" :style="{'backgroundColor': (item % 2 == 0 ? '#ff5a00': '#efefef'), 'color': (item % 2 == 0 ? '#fff': '#333')}">
              <p>这是第{{ item }}屏</p>
              <p>这是第{{ item }}屏</p>
              <p>这是第{{ item }}屏</p>
            </div>
          </mod-carousel-item>
        </mod-carousel>

        <mod-carousel class="carousel-line-item" ref="ca" v-model="index" v-on:swiped="onSwiped" :fade="true" :height="160">
          <mod-carousel-item v-for="item, key in list1" :key="key">
            <div class="demo-carousel-inner" :style="{'backgroundColor': (item % 2 == 0 ? '#ff5a00': '#efefef'), 'color': (item % 2 == 0 ? '#fff': '#333')}">
              <p>这是第{{ item }}屏</p>
              <p>这是第{{ item }}屏</p>
              <p>这是第{{ item }}屏</p>
            </div>
          </mod-carousel-item>
        </mod-carousel>
      </div>

      <mod-button :inline="true" v-on:click="$refs.ca.pre()">前一个</mod-button>
      <mod-button :inline="true" v-on:click="$refs.ca.next()">后一个</mod-button>

      <div class="input-wrap">
        设置索引 <input v-model="index" type="number" min="0" :max="list1.length - 1"/>
      </div>

      <div class="carousel-info">
        当前索引：{{ index }}
      </div>

      <j-code :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">头尾相接循环</div>

      <mod-carousel ref="ca2" :loop="true" :height="160">
        <mod-carousel-item v-for="item, key in list1" :key="key">
          <div class="demo-carousel-inner">
            <p>这是第{{ item }}屏</p>
            <p>这是第{{ item }}屏</p>
            <p>这是第{{ item }}屏</p>
          </div>
        </mod-carousel-item>
      </mod-carousel>

      <mod-button :inline="true" v-on:click="$refs.ca2.pre()">前一个</mod-button>
      <mod-button :inline="true" v-on:click="$refs.ca2.next()">后一个</mod-button>

      <j-code :source="code.loop"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">自动轮播</div>

      <mod-carousel :interval="3000" :height="160">
        <mod-carousel-item v-for="item, key in list1" :key="key">
          <div class="demo-carousel-inner">
            <p>这是第{{ item }}屏</p>
            <p>这是第{{ item }}屏</p>
            <p>这是第{{ item }}屏</p>
          </div>
        </mod-carousel-item>
      </mod-carousel>

      <j-code :source="code.auto"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">垂直方向轮播</div>

      <mod-carousel :loop="true" :height="100" :interval="3000" direction="vertical">
        <mod-carousel-item v-for="item, key in list2" :key="key">
          <div class="demo-carousel-comment">
            <div class="demo-title">
              {{ item.title }}
            </div>
            <div class="demo-content">
              {{ item.content }}
            </div>
          </div>
        </mod-carousel-item>
      </mod-carousel>

      <j-code :source="code.vertical"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">加入自定义元素</div>

      <mod-carousel ref="ca3" :loop="true" :height="200" >
        <mod-carousel-item v-for="item, key in list1" :key="key">
          <div class="demo-carousel-inner">
            <p>这是第{{ item }}屏</p>
            <p>这是第{{ item }}屏</p>
            <p>这是第{{ item }}屏</p>
          </div>
        </mod-carousel-item>

        <div v-on:click="$refs.ca3.pre()" class="control-left">
          <i  class="iconjsmod iconjsmod-xiangzuo1"></i>
        </div>

        <div  v-on:click="$refs.ca3.next()" class="control-right">
          <i  class="iconjsmod iconjsmod-xiangyou1"></i>
        </div>
      </mod-carousel>

      <j-code :source="code.custom"></j-code>
    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  import code from './index.ch';
  import api from './index.ch.api.md'

  export default {
    components: {
      Layout
    },

    data () {
      return {
        api: api,
        code: code,
        list1: [1, 2, 3, 4],
        list2: [
          {
            title: '你曾是少年 你永远是少年',
            content: '当时的他是最好的他 而很多年后的我才是最好的我 最好的他和最好的我之间 隔了一整个青春” 我喜欢自信阳光一笑起来会有虎牙的余淮'
          },
          {
            title: '酸甜苦辣的欢乐中国年',
            content: '赵丽蓉饰演了一位农村的母亲程妈，但和大多数中国母亲一样，过年是家庭最重要的团聚，吃和红包。程妈虽没文化，但对'
          },
          {
            title: '最考验演技的哭戏',
            content: '哭戏是很考验演员演技的，首先你要有真情实感你才能哭的出来，另外哭也分好多种。下面就看看各个角色在钟主任走后伤心'
          }
        ],
        index: 0
      }
    },

    methods: {
      onSwiped (e) {
        console.log(e.index);
      }
    },
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"
  .carousel-line
    display: flex;
    margin-bottom: 10px;

    .carousel-line-item
      flex: 1;
      width: 0;
      border-right: 1px solid main-color;

      &:last-child
        border-right: none;

  .demo-carousel-inner
    background: #efefef;
    color: #ff5a00;
    width: 100%;
    height: 100%;
    padding-top: 30px;
    text-align: center;


  .control-left
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    min-width: 50px;
    width: 10%;

  .control-right
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    min-width: 50px;
    width: 10%;

  .control-left,
  .control-right
    cursor: pointer;
    transition: background 0.3s;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);

    &:hover
      background: rgba(0, 0, 0, 0.6);

      i
        color: #efefef;

    i
      color: #fff;
      font-size: 16px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);


</style>
