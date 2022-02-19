<template>
    <div class="profile">
       <SideBar />
    <div class="right-profile">
        <div />
        <div>
           <Searchpart />
           <div>
  
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
     
       }
  },
  
mounted(){
fetch('https://app.outpostchess.com/api/v2/public_blog_preview/26b1704c-7c3d-11ec-9f99-2a4ad3576981')
   .then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
	console.log(html);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
})
}
} 


</script>

<style scoped>
.profile{
    display:grid;
    grid-template-columns: 259px auto;
}  
.right-profile{
    background-color:  #171819;
    display:grid;
    grid-template-columns: 8% 84% 8%;
    background-color: #1B1C1D;
}
</style>