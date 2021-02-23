<template>
 <div class="container">
   <TabBar>
      <TabBarItem path="/home" >
        <img src="~assets/img/tabbar/home.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img src="~@/assets/img/tabbar/category.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/category_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </TabBarItem >
      <TabBarItem path="/cart">
        <img src="@/assets/img/tabbar/cart.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/cart_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img src="@/assets/img/tabbar/profile.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/profile_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
 </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name:"MainTabBar",
  props: {

  },
  components: {
     TabBar,
    TabBarItem 
  },
 data() {
  return {

  }
 },
}
</script>

<style scoped >

</style>
