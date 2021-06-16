<template>
  <v-container>
    <v-row>
      <assignmentlist />
    </v-row>
  </v-container>
</template>

<script>
import assignmentlist from "../components/assignmentlist.vue";
export default {
  components: {
    assignmentlist,
  },
};
</script>

<style scoped>
</style>