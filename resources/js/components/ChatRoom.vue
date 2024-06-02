<template>
    <div>
        <div>
        <h1>Chat</h1>
        <v-btn @click="showList=!showList"  :disabled="showList" color="success" class="mr-4">View Shoppers</v-btn>
        <v-btn @click="showList=!showList" :disabled="!showList"  color="error" class="mr-4">Close Shoppers</v-btn>
        <ShoppersList :showList="showList" />
        </div>
        <!-- <div class="centered">
        <GroupPublicChat />
        </div> -->
    </div>
</template>

<script>
import ShoppersList from './ShoppersList'
// import GroupPublicChat from './GroupPublicChat'
export default {
    name:'ChatRoom',
    components:{
        ShoppersList,
        // GroupPublicChat
    },
    data(){
        return{
            showList:false
        }
    }
}
</script>

<style scoped>

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>