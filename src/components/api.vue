<template>
<div>
<h1 style="background:blue">News Updates</h1>
<b-row>
    
  
    <b-col>
   <div v-for="info in list" :key="info" class=" container mt-3">
   
   <h3 class="text-left"><span class="text">Author:</span>{{info.author}}</h3>
    <h5 class="text-left"><span class="text">Title:</span>{{info.title}}</h5>
    <h5 class="text-left"><span class="text">Description:</span>{{info.description}}</h5>
    <div class="text-left"><span class="text">Url:</span>{{info.url}}</div>
    <img :src="info.urlToImage" width="50%">
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
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        Vue.axios.get('http://newsapi.org/v2/everything?q=tesla&from=2021-02-10&sortBy=publishedAt&apiKey=1b697e73c70a412781f31bbd895282a3')
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

</style>