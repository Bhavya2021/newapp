<template>
    <div>
    <div v-for="info in fav" :key="info" class=" container mt-3">
   <b-row>
     <b-icon  icon="star-fill" class=" mr-4 mt-1" font-scale="1.5" @click="$emit('removefav',info)" ></b-icon>

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
    </div>
</template>

<script>
export default {
    name:"Favorite",
    props:['fav']
}
</script>

<style scoped>

</style>