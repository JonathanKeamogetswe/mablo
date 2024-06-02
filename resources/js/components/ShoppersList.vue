<template>
    <div>
        <!-- <h1>Shoppers</h1> -->
        <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px" v-show="showList">
          <v-card-title>List of shoppers</v-card-title>
        </v-card>
      </v-flex>
        <div class="centered">
        <GroupPublicChat />
        </div>
    </div>
</template>

<script>
import GroupPublicChat from './GroupPublicChat'
export default {
    name: 'Shoppers',
    props:['showList'],
    components:{
        GroupPublicChat
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