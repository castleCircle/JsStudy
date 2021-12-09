<template>
  <div>
    <p v-for="item in fetchedAsk">
        <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
        <small>{{item.time_age}} by {{item.user}}</small>
    </p> 
  </div>
</template>

<script>
import { mapGetters} from 'vuex'; 

export default {
  computed: {
    // ...mapState({
    //   ask: state => state.ask
    // })
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>

<style>

</style>