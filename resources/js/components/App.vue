<template>
  <v-app>    
    <v-main class="mx-4 mb-4">
          <Navbar />
    
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main> 
      <br><br><Footer />
  </v-app>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
