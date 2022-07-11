<template>
  <div class="profile">
    <SideBar />
    <div class="right-profile">
      <div />
      <div>
        <Searchpart />
        <div
          v-for="blog in blog_data.slice().reverse() "
          :key="blog.blog_post_uuid"
          class="content"
        >
          <div class="blog_title">
            {{ blog.title }}
          </div>
          <div
            class="blog_content"
            v-html="blog.content_html"
          />
          <hr>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>
<script>
import SideBar from "../components/SideBar.vue";
import Searchpart from '../components/Searchpart.vue'; 
export default {
  name: "Blog",
  components: {
    SideBar,
    Searchpart
  },
  data(){
       return {
          blog_data:[]
       }
  },
  
mounted(){
fetch('https://app.outpostchess.com/api/v2/public_blog_list',{
     method:'GET',
            headers: {'Content-Type': 'application/json'},
})
    .then(response => response.json())
    .then((data) => (this.blog_data = data))
    .then(data => console.log('blog',data)) 
    
 
}
}  


</script>

<style scoped>
 >>>.blog_content > h1{
  font-size:2rem
}
>>>.blog_content > p{
  font-size:1.125rem
}
>>>.blog_content >blockquote> h2{
  font-size:1.125rem
}
>>> .blog_content >p> img{     
  width:60%
}

.content{
  color:rgb(219, 215, 215);
}
.blog_content{
 padding-top:30px;
 text-align: left;
 margin:auto;
 font-size:1.125rem;
 font-family: 'Red Hat Display', Helvetica, Arial, sans-serif;
}
.blog_title{
    text-align: left;
    font-weight: 600;
    font-size: 1.25rem;
    color:#FFFFFF
}


.profile{
    display:grid;
    grid-template-columns: 16.25rem auto;
}  
.right-profile{
    display:grid;
    grid-template-columns: 12% 76% 12%;
    background-color: #1B1C1D;
}
p > img{
  width:100%
}
hr{
  width:100%
}
</style>