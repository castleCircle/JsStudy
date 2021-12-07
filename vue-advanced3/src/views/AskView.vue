<template>
  <div>
    <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">
        {{item.title}}
      </a>
      <small>
        {{ item.time_ago }} 
        by 
        {{item.user}}
        <router-link :to="`item/${item.id}`">{{item.user}}</router-link>
      </small>
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