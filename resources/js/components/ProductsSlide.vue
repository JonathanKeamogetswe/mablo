<template>
    <div class="products">
        <!-- <h1>Slide here</h1> -->
         <!-- <v-card
    elevation="24"
    max-width="444"
    class="mx-auto"
  > -->
        <v-carousel
    cycle
    height="100%"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="product in products"
      :key="product.prod_id"
    >

        <v-sheet
        :color="warning"
        height="100%"
      >
     
          {{ product.prod_name}} 
            
        </v-sheet>
    </v-carousel-item>
    
  </v-carousel>
         <!-- </v-card> -->
    <!-- <div class="w-25">
    <div v-for="product in products" :key="product.prod_id"> {{ product.prod_name}}</div>

    </div> -->

    </div>
</template>

<script>
export default {
    name: 'ProductsSlide',
    data(){
        return{
        products:''

        }
    },
    methods: {
      getProducts(){
        axios.get('/api/product').then((res) =>{
            this.products = res.data
        }).catch((error) =>{
          console.log(error.response.data)
          
        })
      }
    },
    
    mounted(){
      this.getProducts()
    }
}
</script>

<style scoped>
/* .slide{
  position: fixed;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;

} */
.products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>