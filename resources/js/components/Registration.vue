<template>
    <div class="registration">
 <!-- <p>fdv</p> -->
 <br><br><br><br>
 <v-card
    class="mx-auto"
     >
     <v-card-title class="text--white">Create Account:</v-card-title>
    <v-form
    ref="form"
    v-model="form.valid"
    lazy-validation
  >
     <v-text-field
      v-model="form.name"
      label="Name"
      
      required
      
    ></v-text-field>
    <v-text-field
      v-model="form.email"
      label="Email"
      :rules="form.emailRules"
      required
      
    ></v-text-field>

    <v-text-field
      v-model="form.password"
      label="Password"
      required
      :rules="form.passwordRules"
      @click:append="form.show = !form.show"
      :append-icon="form.show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="form.show ? 'text' : 'password'"
    ></v-text-field>

    <v-text-field
      v-model="form.password2"
      label="Confirm Password"
      @click:append="form.show2 = !form.show2"
      :append-icon="form.show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="form.show2 ? 'text' : 'password'"
      :rules="form.password2Rules"
      required
    ></v-text-field>

    <v-btn
      @click.prevent="saveForm"
      type="submit"
      color="success"
      class="mr-4"
      
    >
      Register
    </v-btn>

    <v-btn
      color="warning"
    to="/login"
    >
      have an account?
    </v-btn>
  </v-form>
 </v-card>
</div>
</template>

<script>
export default {
    name: 'Registration',
    data(){
        return{
          form:{
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password:'',
            passwordRules: [
                v => !!v || 'Choose a password.',
                v => v.length >= 8 || 'Min 8 characters',
                v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Must contain numerical digits,lower and uppercase letters!'
            ],
            password2:'',
            password2Rules: [
                v => v == this.form.password || 'passwords must match!!'
            ],
            name:'',
            show: false,
            show2: false
          }
        }
    },
    methods: {
      saveForm(){
        axios.post('/api/register', this.form).then(() =>{
          console.log('saved');
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
}
</script>

<style scoped>
.registration{
  width: 50%;
  margin: 0 auto;
  bottom: 50%;
}
</style>