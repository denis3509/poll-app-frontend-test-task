<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col xs=12 sm=10 md=8 lg=6>
        <v-card :loading="loading">
          <v-tabs
              v-model="tab"
              color="deep-purple-accent-4"
              align-tabs="center"
          >
            <v-tab :value="1">Вход</v-tab>
            <v-tab :value="2">Регистрация</v-tab>

          </v-tabs>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item :value="1">
                <login-form
                    @login="handleLogin"/>

              </v-window-item>

              <v-window-item :value="2">
                <register-form @register="handleRegister"/>
              </v-window-item>

            </v-window>
            <v-row v-if=error>
              <v-col class="text-red-lighten-1">
                <strong>{{ error }}</strong>
              </v-col>
            </v-row>
            <v-row v-if=success>
              <v-col class="text-green-lighten-1">
                <strong>{{ success }}</strong>
              </v-col>
            </v-row>

          </v-card-text>

        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>

  </v-container>
</template>

<script>
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import {mapActions} from "vuex";

export default {
  name: "Login",
  components: {RegisterForm, LoginForm},
  data: () => ({
    tab: null,
    loading: false,
    error: null,
    success : null,
  }),
  methods: {
    ...mapActions({
      login: "auth/login",
      register: "auth/register"
    }),
    async handleLogin({username, password}) {
      this.loading = true
      this.error = null
      try {
        await this.login({username, password})
        this.$router.push({name: 'Main'})
      } catch (e) {
        this.error = e.message
        console.error(e)
      }
      this.loading = false
    },
    async handleRegister({username, email, password}) {
      this.loading = true
      this.error = null
      try {
        await this.register({username, email, password})
        this.success = "You can now login with " + username
      } catch (e) {
        this.error = e.message
        console.error(e)
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>