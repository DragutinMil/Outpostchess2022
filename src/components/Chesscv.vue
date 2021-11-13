<template>
    <div class="container">
      
      <div id="about-me">
        <div id="about-edit">
          <p style="padding-right:10px">About Me</p> 
          <i @click="editable=!editable" v-if="!editable" class="far fa-edit"></i>
          
        </div>
         <!--   <input v-if="editable" class="about-text" type="text" :value="user.about_me"> --->
            <p  :contenteditable=editable style="white-space: pre-line;"   @input="onInput"   v-bind:class="{'about-text':isActive,'about-text2':editable,}" >{{user.about_me}} </p>
            <div>
              <button class="middle2-buttons"   v-if="editable" @click="editconfirm"  type="button" >Confirm changes</button>
              <button class="middle2-buttons" @click="editable=!editable"  v-if="editable"  type="button" >Cancel</button>
            </div>
     <!--    <input  type="text" class="about-text" v-if="editable"   v-model="aboutme"   placeholder='about me'>
        <p v-else class="about-text">tekst  {{user.about_me}} </p>-->
        <hr>
        <div>
          <p>My CV: </p>
          <div >
            <p id="opencv" @click="newopenwindow()"  >{{user.cv.file_name}}</p> 
               <input   type="file"  style="display:none;"  title=""  id="fileUpload"  @change="onCVSelected" />
    <label for="fileUpload" class="file-input"></label> 
          </div>
          
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'Chesscv',
  props:{
    user:Object,
    },
  data () {
      return {
         files:'',
         formData:'',
         aboutme:'',
         selectedCV:null,
         editable:false,
         isActive:true
         
      }
    },


 methods:{
   onInput(e) {
      this.aboutme=e.target.innerText
      console.log(this.aboutme)
    },


   editconfirm:function(){
       this.editable=false;
      fetch('https://sah.fly.dev/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              about_me:this.aboutme,
             
              } )
})
        .then(response => response.json())
            .then(data => console.log(data)) 
           
      },
   

   newopenwindow:function(){
     window.open(this.user.cv.file_url);
   },
  
  onCVSelected:function(event) {
    this.selectedCV = event.target.files[0]
    this.formData = new FormData()
    this.formData.append('file', this.selectedCV)
    this.formData.append('fileCategory', 'CV' )
	
  fetch('https://sah.fly.dev/api/v2/fileupload', {
    method: 'POST',
		headers: {//'Content-Type': 'application/x-www-form-urlencoded',
		"Authorization":`Bearer ${localStorage.getItem('token')}`
		},		
    body: this.formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  
  .catch(error => {
    console.error(error)
  })
  .then(this.$router.go());
}
}
}  



</script>


<style>
   hr{
   border: 0.5px solid  rgba(199, 201, 208, 0.2);
    width:80%;
}
.container{
  display:block;
  align-items: left;
  text-align: left;
  
}
.about-me{
  padding-top:30px;
 
}
#about-edit{
  display: flex;
}
a{
  color:#C8A07D
}
i:hover{
   opacity:0.7
}
.about-text{
 color:#b0b5c5;
 margin-right:20px;
}

.file-input::before {
  content: 'Upload CV file';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}
.file-input:hover::before {
  opacity: 0.7;
}
.file-input::-webkit-file-upload-button {
  visibility: hidden;

}

#opencv:hover{
  cursor: pointer;
  color:#C8A07D;
  text-decoration: underline;
}

.middle2-buttons{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 12px;
  width: 120px;
  height: 24px;
  margin:0 20px 35px 0;
  
  
   
}
.middle2-buttons:hover{
    opacity: 0.7;
}

</style>
