<template>
  <div class="container">
    <p id="rotate2">
      Coming soon
    </p>
    <img
      id="calendarpic"
      src="@/assets/chess_diary2.png"
      alt=""
    >
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
  #rotate2{
    position:relative;
    transform: rotate(-45deg);
    font-size:1.625rem;
    font-weight: 600;
    letter-spacing: 1rem;
    top:18.75rem;
    opacity: 0.8;
    color:#FFFFFF;
    

}
#calendarpic{
  opacity: 0.8;
  width:90%;
}
#calendarpic:hover{
  opacity: 0.5;
}
</style>
