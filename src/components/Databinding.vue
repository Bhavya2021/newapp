<template>
<div>
    <b-card :class="{hover:type==='hover',hover1:type==='hover1',hover2:type==='hover2'}">


    </b-card>
</div>
</template>

<script>
export default {
    name:"DataBinding",
    props:['type'],
}
</script>``

<style scoped>
.card{
    height: 80px;
    width: 80px;
     background: #ffffff;
  border: 1px solid #e6e6e7;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0.5em;
}
.hover:hover{
    background-color:red;
}
.hover1:hover {
  background-color: yellow;
}
.hover2:hover {
  background-color:green;
}


</style>