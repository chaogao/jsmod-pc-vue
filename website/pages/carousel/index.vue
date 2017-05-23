<template>
  <layout title="Carousel" source="carousel/index.vue">
    <div class="components-view">
      <div class="view-title">基础实例</div>

      <mod-carousel ref="ca" v-model="index" v-on:swiped="onSwiped" :height="160">
        <mod-carousel-item v-for="item, key in list1" :key="key">
          <div class="demo-carousel-inner">
            <span>这是第{{ item }}屏</span>
          </div>
        </mod-carousel-item>
      </mod-carousel>

      <div class="button-groups">
        <mod-button :inline="true" v-on:click="$refs.ca.pre()">前一个</mod-button>
        <mod-button :inline="true" v-on:click="$refs.ca.next()">后一个</mod-button>
        <mod-button :inline="true" v-on:click="list1.push(list1.length + 1)">添加一个</mod-button>
      </div>

      <div class="input-wrap">
        设置索引 <input v-model="index" type="number" min="0" :max="list1.length - 1"/>
      </div>

      <div class="carousel-info">
        当前索引：{{ index }}
      </div>
    </div>

    <div class="components-view">
      <div class="view-title">自动轮播</div>

      <mod-carousel :interval="3000" :height="160">
        <mod-carousel-item v-for="item, key in list1" :key="key">
          <div class="demo-carousel-inner">
            <span>这是第{{ item }}屏</span>
          </div>
        </mod-carousel-item>
      </mod-carousel>
    </div>


    <div class="components-view">
      <div class="view-title">头尾相接循环</div>

      <mod-carousel :loop="true" :height="160">
        <mod-carousel-item v-for="item, key in list1" :key="key">
          <div class="demo-carousel-inner">
            <span>这是第{{ item }}屏</span>
          </div>
        </mod-carousel-item>
      </mod-carousel>
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
    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  export default {
    components: {
      Layout
    },

    data () {
      return {
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

  .button-groups
    margin: 10px 0;

  .demo-carousel-inner
    background: #efefef;
    color: #ff5a00;
    width: 100%;
    height: 100%;

    span
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

  .demo-carousel-comment
    .demo-title
      color: #333;

    .demo-content
      color: #999;
      font-size: 12px;

</style>
