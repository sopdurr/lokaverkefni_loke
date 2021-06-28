<template>
  <v-container>
    <v-row>
      <v-col>
        <h4>Case report</h4>
        <v-subheader
          >choose case from case list to write report for</v-subheader
        >
        <v-text-field
          color="orange"
          v-model="newReport.name"
          label="Name of case"
        ></v-text-field>
        <v-text-field
          @keypress="onlyNumbers($event)"
          color="orange"
          label="Crime ID"
          v-model="newReport.id"
        ></v-text-field>
        <v-select
          color="orange"
          :items="users"
          item-text="name"
          label="Employee"
          v-model="newReport.reporter"
        >
        </v-select>
        <v-textarea
          color="orange"
          label="Report"
          v-model="newReport.report"
        ></v-textarea>
        <v-btn width="100%" @click="addReport">Submit</v-btn>
      </v-col>
      <v-col>
        <h4>Case list</h4>
        <v-list-group>
          <v-list-item v-for="(c, index) in crimes" :key="index">
            Case name: {{ c.name }} - ID: {{ c.id }}
          </v-list-item>
        </v-list-group>
      </v-col>
    </v-row>
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
    onlyNumbers(e) {
      let num = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(num)) return true;
      else e.preventDefault();
    },
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