<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
              v-model="username"
              :rules="nameRules"
              :counter="10"
              label="Username"
              required
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <!--      <v-row>-->
      <!--        <v-col-->

      <!--        >-->
      <!--          <v-text-field-->
      <!--              v-model="lastname"-->
      <!--              :rules="nameRules"-->
      <!--              :counter="10"-->
      <!--              label="Last name"-->
      <!--              hide-details-->
      <!--              required-->
      <!--          ></v-text-field>-->
      <!--        </v-col>-->
      <!--      </v-row>-->
      <v-row>
        <v-col

        >
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col

        >
          <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              hide-details
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="register" color="primary" block class="mt-2">
        Register
      </v-btn>


    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "RegisterFrom",
  data: () => ({
    valid: false,
    username: '',
    nameRules: [
      value => {
        if (value) return true

        return 'Username is required.'
      },
      value => {
        if (value?.length <= 10) return true

        return 'Username must be less than 10 characters.'
      },
    ],
    email: '',
    emailRules: [
      value => {
        if (value) return true
        return 'E-mail is requred.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true
        return 'E-mail must be valid.'
      },
    ],

    password: '',
    passwordRules: [
      value => {
        if (value) return true
        return 'Password is required.'
      },
      value => {
        if (value?.length >= 8) return true

        return 'Password must be more than 8 characters.'
      },
    ],

  }),
  methods: {
    register() {
      const {username, email, password} = this
      this.$emit("register", {username, email, password})
    }
  }
}
</script>

<style scoped>

</style>