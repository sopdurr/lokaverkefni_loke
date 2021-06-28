<template>
  <v-container>
    <v-row>
      <v-col>
        <h4>New assignment</h4>
        <v-text-field
          color="orange"
          class="width"
          label="Assignment description"
          v-model="newAssignments.name"
        >
        </v-text-field>
        <v-select
          color="orange"
          class="width"
          label="Assignment for:"
          :items="users"
          item-text="name"
          v-model="newAssignments.employee"
        ></v-select>
        <v-select
          color="orange"
          class="width"
          label="Assignment Complete ?"
          :items="active"
          item-text="active"
          v-model="newAssignments.closed"
        ></v-select>
        <v-btn width="50%" @click="addAssignment">Submit </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newAssignments: {},
    };
  },
  methods: {
    addAssignment() {
      this.$store.commit("addAssignment", this.newAssignments);
      this.newAssignments = {};
    },
  },
  computed: {
    active() {
      return this.$store.getters.active;
    },
    assignments() {
      return this.$store.getters.assignments;
    },
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>

<style>
h4 {
  color: #e1f5fe;
}

.width {
  width: 50%;
}
</style>