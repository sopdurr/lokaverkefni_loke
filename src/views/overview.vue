<template>
  <v-container>
    <span class="logged"> LOGGED IN: {{ user }}</span>
    <v-row>
      <v-col>
        <tasklist />
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <v-col>
        <crimelist />
      </v-col>
      <v-col>
        <assignmentlist />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import assignmentlist from "../components/assignmentlist.vue";
import Crimelist from "../components/crimelist.vue";
import tasklist from "../components/tasklist.vue";

export default {
  name: "overview",
  components: {
    tasklist,
    assignmentlist,
    Crimelist,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
.logged {
  color: orange;
}

hr {
  margin: 20px;
}
</style>