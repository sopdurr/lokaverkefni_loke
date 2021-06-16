<template>
  <v-container>
    <v-row>
      <v-col>
        <span><h4>Assignments list</h4></span>
        <ol>
          <li v-for="(a, index) in assignments" :key="index">
            <input
              type="checkbox"
              :checked="a.closed"
              @click="assignmentDone(index)"
            />
            <span v-bind:class="{ strike: a.closed }">
              {{ a.name }} / For: {{ a.employee }}
            </span>
          </li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    assignments() {
      return this.$store.getters.assignments;
    },
  },
  methods: {
    assignmentDone(value) {
      this.$store.commit("assignmentDone", value);
    },
  },
};
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}
h4 {
  color: #e1f5fe;
  margin-bottom: 10px;
}
</style>