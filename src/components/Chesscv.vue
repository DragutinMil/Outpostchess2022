<template>
  <div class="chesscv">
    <div id="about-me">
      <div id="about-edit">
        <p style="padding-right:0.625rem">
          About Me
        </p> 
        <i
          v-if="!editable"
          class="far fa-edit fontawesome"
          @click="editable=!editable"
        />
      </div>
      <!--   <input v-if="editable" class="about-text" type="text" :value="user.about_me"> --->
      <div>
        <p
          :contenteditable="editable"
          style="white-space: pre-line;"
          :class="{'about-text3':editable,'about-text':isActive,}"
          @input="onInput"
        >
          {{ user.about_me }}
        </p>
      </div>
      <div>
        <button
          v-if="editable"
          class="middle2-buttons"
          type="button"
          @click="editconfirm"
        >
          Confirm changes
        </button>
        <button
          v-if="editable"
          class="middle2-buttons"
          type="button"
          @click="editable=!editable"
        >
          Cancel
        </button>
      </div>
      <!--    <input  type="text" class="about-text" v-if="editable"   v-model="aboutme"   placeholder='about me'>
        <p v-else class="about-text">tekst  {{user.about_me}} </p>-->
      <hr>
      <div>
        <p>My CV: </p>
        <div>
          <p
            id="opencv"
            @click="newopenwindow()"
          >
            {{ user.cv.file_name }}
          </p> 
          <input
            id="fileUpload"
            type="file"
            style="display:none;"
            title=""
            @change="onCVSelected"
          >
          <label
            for="fileUpload"
            class="file-input"
          /> 
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Chesscv',
  props:{
    user:{
      type: Object,
      required: true,
    }
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
    },


   editconfirm:function(){
       this.editable=false;
      fetch('https://app.outpostchess.com/api/v2/current_user_info', {
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
	
  fetch('https://app.outpostchess.com/api/v2/fileupload', {
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
  .then( response=>window.location.reload(response))
}
}
}  



</script>


<style>
   hr{
   border: 0.5px solid  rgba(199, 201, 208, 0.2);
    width:80%;
}
.chesscv{
  display:block;
  align-items: left;
  text-align: left;
   margin:1.875rem
}
 
      
    
.about-me{
  padding-top:1.875rem;
 
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
 color:#6F7381;
 margin-right:1.25rem;
 
}


.about-text3{
 color:#6F7381;
 margin-right:1.25rem;
 background-color:rgba(27, 28, 29, 1);
 padding:0.625rem;
 border-radius:5px
}

.file-input::before {
  content: 'Upload CV file';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 0.5rem;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
}
.file-input:hover::before {
  opacity: 0.7;
}
.file-input::-webkit-file-upload-button {
  visibility: hidden;

}
#opencv{
  color:#6F7381;
}
#opencv:hover{
  cursor: pointer;
  color:#FFFFFF;
  text-decoration: underline;
}

.middle2-buttons{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 0.75rem;
  width: 7.5rem;
  height: 1.5rem;
  margin:0 1.25rem 2.1875rem 0; 
}
.fontawesome{
  color:#C8A07D;
  cursor: pointer;
}



.middle2-buttons:hover{
    opacity: 0.7;
}


</style>
