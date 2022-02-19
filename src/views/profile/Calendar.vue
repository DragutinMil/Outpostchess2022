<template>
  <div class="calendar">
      <div class="container">
            <p>CALENDAR</p>
             <img id="calendarpic" src="@/assets/sooncalendar.jpg" alt="">
  
      </div>
   
  </div>
</template>
<script>
   export default {
  name: 'Calendar',
  
  props: {
    msg: String
  },
 
}

</script>



<style >
    .container{
       padding:35px
    }
    #calendarpic{
      width:90%
     
      
    }
</style>