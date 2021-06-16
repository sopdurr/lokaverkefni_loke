<template>
  <v-container>
    <v-row>
      <v-col>
        <h4>Case report</h4>
        <v-subheader
          >choose case from case list to write report for</v-subheader
        >
        <v-text-field
          v-model="newReport.name"
          label="Name of case"
        ></v-text-field>
        <v-text-field
          label="Crime ID"
          v-model="newReport.crimeId"
        ></v-text-field>
        <v-select
          :items="users"
          item-text="name"
          label="Employee"
          v-model="newReport.reporter"
        >
        </v-select>
        <v-textarea label="Report" v-model="newReport.report"></v-textarea>
        <v-btn width="100%" @click="addReport">Submit</v-btn>
      </v-col>
      <v-col>
        <h4>Case list</h4>
        <v-list-group>
          <v-list-item v-for="(c, index) in crimes" :key="index">
            Case name: {{ c.name }} - ID: {{ c.crimeId }}
          </v-list-item>
        </v-list-group>
      </v-col>
    </v-row>
    <span v-for="r in reports" :key="r.name">
      {{ r.name }} {{ r.crimeId }} {{ r.report }}
    </span>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      newReport: {},
      report: {},
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    crimes() {
      return this.$store.getters.crimes;
    },
    reports() {
      return this.$store.getters.reports;
    },
  },
  methods: {
    addReport() {
      this.$store.commit("addReport", this.newReport);
      (this.newReport = {}), console.log(this.$store.getters.reports);
    },
  },
};
</script>

<style>
v-text-field {
  width: 50%;
}
</style>