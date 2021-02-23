<template>
 <div class="container">
    <swiper>
        <swiper-item v-for="i in banners" :key="i.title">
          <a :href="i.link">
            <img :src="i.image" alt="">
          </a>
        </swiper-item>
      </swiper>
 </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'HomeSwiper',
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
 data() {
  return {

  }
 },
}
</script>

<style scoped  >

</style>
