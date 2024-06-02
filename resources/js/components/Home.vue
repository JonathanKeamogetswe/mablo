<template>
<div>
          <!-- <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px">
          <v-card-title>Shops pics</v-card-title>
        </v-card>
           </v-flex> -->
           <v-flex>
           <products-slide/>
           </v-flex>
</div>
</template>

<script>
import ProductsSlide from './ProductsSlide'
export default {
  name: 'Home',
  components:{
    ProductsSlide
  },
  data(){
    return{
    }
  }
}
</script>