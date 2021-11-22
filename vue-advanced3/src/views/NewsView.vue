<template>
  <div>
    <div v-for="user in users">{{user}}</div> 
  </div>
</template>

<script>

import { fetchNewsList } from '../api/index.js'

export default {
  data(){
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
    .then(response => this.users = response.data)
    .catch()
  }
}
</script>

<style>

</style>