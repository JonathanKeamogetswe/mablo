<template>
    <div class="resetPassword">
        <v-card class="mx-auto">
     <v-card-title class="text--white">Reset Password</v-card-title>
            <v-form>
                <v-text-field
                 v-model="email"
                 label="Email"
                 :rules="emailRules"
                 required >

                </v-text-field>
                <v-btn>Send reset link</v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ResetPassword',
    data(){
        return{
            email:'',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    }

}
</script>

<style scoped>
.resetPassword{
  width: 50%;
  margin: 0 auto;
  bottom: 50%;
}
</style>