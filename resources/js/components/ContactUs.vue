<template>
    <div >
       <!-- <h1>contact us</h1> -->
       <div class="card">
       <v-card  
                max-width="500"
                outlined
                shaped
                color="blue"
       >
           <v-card-title>Contact Information</v-card-title>

           <v-card-text>
               <span class="white--text text-uppercase">Address: {{contactInfor.PhysicalAddress}}</span><br>
               <span class="white--text text-uppercase">telephone: {{contactInfor.telephone}}</span><br>
               <span class="white--text text-uppercase">Email: {{contactInfor.email}}</span><br>    
           </v-card-text>

       </v-card>
       </div>
       <br><br><br><br> 
       <ContactUsForm />
    </div>
</template>

<script>
import ContactUsForm from './ContactUsForm';
export default {
    name: 'ContactUs',
    components:{
        ContactUsForm
    },
    data(){
        return{
            contactInfor:{
                PhysicalAddress:'734 Pagel Street Wolmer Pretoria 0182',
                telephone:'+27 12 546 1562',
                email:'appsmatta@gmail.com'
            }
        }
    }
}
</script>
<style scoped>
 .card{
  position: fixed;
  left: 15%;
  bottom: 35px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>