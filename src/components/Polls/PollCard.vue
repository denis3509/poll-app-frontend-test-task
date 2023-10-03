<template>
  <v-card>
    <v-card-title>

    </v-card-title>
    <v-card-actions>
      <v-btn>Пройти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PollCard",
  props: {
    poll: {
      type: Poll,
    }
  }


}
</script>

<style scoped>

</style>