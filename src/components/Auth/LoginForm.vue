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
      <v-btn :disabled="!valid" @click="login" color="primary" block class="mt-2">
        Login
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "LoginForm",
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
  watch : {

  },
  methods: {
    login() {
      const {username, password} = this
      this.$emit("login", {username, password})
    }
  }
}
</script>

<style scoped>

</style>