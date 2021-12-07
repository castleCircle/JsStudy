<template>
  <div>
      <p>
          test: {{itemInfo}}
      </p>
  </div>
</template>

<script>

export default {
    computed: {
        itemInfo(){
            return this.$store.state.item
        }
    },
    created(){
        console.log(this.$route)
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemId);
    }
}
</script>

<style>

</style>