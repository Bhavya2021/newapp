<template>
<div>
<b-row>
    
<b-col>
   <div v-for="(info) in list" :key="info" class=" container mt-3">
   <b-row>
     <b-icon  :icon= "fav.includes(info)?'star-fill':'star'" class=" mr-4 mt-1" font-scale="1.5" @click="$emit('addfav',info)"></b-icon>

    <h3 class="text-left"><span class="text">Author:</span>{{info.author}}</h3>
   </b-row>
   
    <h5 class="text-left"><span class="text">Title:</span>{{info.title}}</h5>
  
    <h5 class="text-left"><span class="text">Description:</span>{{info.description}}</h5>

    <div class="text-left"><span class="text">Url:</span>{{info.url}}</div>

    <img :src="info.urlToImage" width="50%">
   
    <div><a :href="info.url" target="blank"><h5>visit here</h5></a></div>
   
  
     <h5 class="text-left"><span class="text">PublishedAt:</span>{{new Date(`${info.publishedAt}`).toLocaleString()}}</h5>

     
    <h5 class="text-left"><span class="text">Content:</span>{{info.content}}</h5>
  

      
    

   
   </div>
</b-col>
</b-row> 
</div> 
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios' 
Vue.use(VueAxios,axios)
export default {
    name:"Api",
    props:['fav'],
    data(){
        return{
            list:[],
            
        }
    },
    methods:{
     
      
        
    },
    mounted(){
        Vue.axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1b697e73c70a412781f31bbd895282a3')
        .then((resp)=>{
            this.list=resp.data.articles,
            console.log(resp.data)
        })
    }
   
}
</script>
<style scoped>
.text{
    font-weight: bolder;
}
.search{
    margin-left:800px;
}
.btn{
    color: white;
}

</style>