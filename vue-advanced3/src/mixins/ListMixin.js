
import bus from '../utils/bus.js'
export default {
    created(){
        bus.$emit('start:spinner');
        console.log(this.$route.name)
        this.$store.dispatch('FETCH_LIST',this.$route.name).then(()=> {
        console.log('fetched')
            bus.$emit('end:spinner')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}