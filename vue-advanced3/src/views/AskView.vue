<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'; 

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