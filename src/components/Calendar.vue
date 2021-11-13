<template>
  <div class="calendar">
      <div class="container flex-center">
            
             <img id="calendarpic" src="@/assets/sooncalendar.jpg" alt="">
  
      </div>
   
  </div>
</template>
<script>
   export default {
  name: 'Calendar',
  
  props: {
    
  },
 
}

</script>



<style >
    .container{
       padding:30px
    }
    #calendarpic{
      width:90%
     
      
    }
    .calendar{
      margin:auto
    }
</style>