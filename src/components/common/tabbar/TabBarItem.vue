<template>
 <div class="tab-bar-item" @click="itemClick">
   <slot v-if="!isActive" name="item-icon"></slot>
   <slot v-else name="item-icon-active"></slot>
   <div :style="activeStyle">
      <slot name="item-text" ></slot>
   </div>
 </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  components: {

  },
 data() {
  return {
  }
 },
 created(){
 },
 computed:{
   isActive(){
     return this.$route.path.indexOf(this.path)!==-1
   },
   activeStyle(){
     return this.isActive ? {color:this.activeColor}:{}
   }
 },
 methods:{
  itemClick(){
    this.$router.replace(this.path)
console.log(this.$route);

 }
 }
}
</script>

<style scoped>

.tab-bar-item{
  text-align: center;
  height: 49px;
  flex:1;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>
