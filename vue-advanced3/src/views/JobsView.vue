<template>
  <div>
    <div v-for="user in users">
      {{user}}
    </div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js'

export default {
  data(){
    return {
      users : []
    }
  },
  created(){
    fetchJobsList()
    .then(response => this.users = response.data)
    .catch()
  }
}
</script>

<style>

</style>