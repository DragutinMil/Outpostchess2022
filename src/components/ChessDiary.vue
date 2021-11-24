<template>
  <div class="container">
    <img id="calendarpic" src="@/assets/chess_diary2.png" alt="">
    <p class="rotate">Coming soon</p>
  </div>
</template>



<script> 
export default {
  name: 'ChessDiary',
  props:{
    },
  
    data () {
     return {
         
     }
   }
}
</script>


<style scoped>
  .rotate{
    transform: rotate(-45deg);
    font-size:26px;
    font-weight: 600;
    letter-spacing: 15px;
    position:relative;
    bottom: 290px;
    opacity: 0.8;
    color:#FFFFFF;
}
#calendarpic{
  opacity: 0.8;
}
#calendarpic:hover{
  opacity: 0.5;
}
</style>
