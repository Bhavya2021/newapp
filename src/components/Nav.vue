
<template>
<div>
<div v-if="showNav">

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="search form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <!-- <button class="btn btn-outline-success ml-2" type="submit" >SignIn</button> -->
        <a class="navbar-brand ml-4" @click="$router.push('/profile')">Profile</a>
        <a class="navbar-brand ml-2" @click="$router.push('/favourite')">Favourite</a>
      </form>
    </div>
  </div>
</nav>
</div>

</div>    
</template>

<script>
export default {
    name:"Nav",
    computed:{
        showNav(){
            return !this.$route.meta.showNav;
        }
    }

}
</script>

<style scoped>
.search{
    margin-left:800px;
}

</style>