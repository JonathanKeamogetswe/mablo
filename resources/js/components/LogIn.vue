<template>
<div class="loginform">
 <!-- <p>fdv</p> -->
 <br><br><br><br>
 <v-card
    class="mx-auto"
            >
     <v-card-title>Login below:</v-card-title>
    <v-form
    ref="form"
     
    lazy-validation
  >
    <v-text-field
      v-model="form.email"
      label="Enter email"
      required
      :rules="form.emailRules"
    ></v-text-field>

    <v-text-field
      v-model="form.password"
      label="Enter password"
      @click:append="form.show2 = !form.show2"
      :append-icon="form.show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="form.show2 ? 'text' : 'password'"
      required
    ></v-text-field>

    <v-btn
      @click.prevent="LoginUser"
      type="submit"
      color="success"
      class="mr-4"
      
    >
      Log in
    </v-btn>

    <v-btn
      color="warning"
    to="/Registration"
    >
      No Account?
    </v-btn>
    
    <v-btn to="/resetPassword" text>
      forgot Password? click here
    </v-btn>
    
  </v-form>
 </v-card>
</div>
</template>

<script>
export default {
    name: 'LogIn',
    data(){
        return{
          form:{
             email:'',
            emailRules: [
                v => !!v || 'Enter a valid email',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password:'',
            show2 : false
          }
           
        }
    },
    methods: {
      loginUser(){
        axios.post('/api/login',this.form).then(()=>{
          this.router.push({ name: "ShoppingList"});
        }).catch((error) =>{
          console.log('errors')
        })
      }
    }
}
</script>

<style scoped>
.loginform{
  width: 50%;
  margin: 0 auto;
  bottom: 50%;
}
</style>

