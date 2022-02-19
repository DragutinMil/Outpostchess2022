 <template>
     <div    id="middle1">
          <input @click='go_to_search' type="search" name="" class="search-profile" placeholder="Go to search...">
          <a  id="a-middle"> <img   src="../assets/notification_important_24px@2x.png" alt="" id="middle1-img"></a>
     </div>
 </template>

<script>
 export default {
  name: 'Searchpart',
  props: {
  msg: String
  },
  methods:{
      go_to_search:function(){
        this.$router.push('../intsearch');
      }
  }
}
</script>

<style>

.search-profile{
      border: 1px solid #393939;
      box-sizing: border-box;
      border-radius: 20px;
      background-color:#1B1C1D ;
      display:flex;
      height: 33px;
      background-image: url(../assets/search_24px.png);
      background-repeat:no-repeat;
      background-position-x: 22px;
      background-position-y: 6px;
      padding-left:60px;
      font-size: 14px;
      color:#C7C9D0;
      cursor:pointer;
      width:270px;
    }
#middle1{
    display:grid;
    grid-template-columns: 95% 5%;
    margin-top:50px;
    
}
#middle1-img{
   height: 25px;
}
#a-middle{
    border-radius: 50% ;
    height: 45px;
    width: 45px;
    background-color: #202122;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
#a-middle:hover{
    opacity: 0.8;
}
</style>