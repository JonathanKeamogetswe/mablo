<template>
    <div class="forms">
        <!-- <h1>CONTACT </h1> -->
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Message"
      value="This is clearable text."
      v-model="message"
      required
      :rules="messageRules"
    ></v-textarea>

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must confirm to continue!']"
      label="Do you confirm?"
      required
    ></v-checkbox> -->

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Send
    </v-btn>

    <!-- <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form>
    </div>
</template>

<script>
export default {
    name: 'ContactUsForm',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message:'',
      messageRules:[
          v => !!v || 'Message is required',
          v => (v && v.trim().length >= 10) || 'Message cannot be shorter than 10 charecters'
      ],
    
      // checkbox: false,
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
     }
      // reset () {
      //   this.$refs.form.reset()
      // },
      // resetValidation () {
      //   this.$refs.form.resetValidation()
      // },
    },

}
</script>

<style scoped>
.forms{
  position: fixed;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;

}
</style>