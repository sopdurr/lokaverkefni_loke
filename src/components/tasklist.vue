<template>
  <v-container>
    <v-row class="content">
      <v-col>
        <v-btn
          width="100%"
          color="light-blue lighten-5"
          height="50px"
          @click="newCase"
        >
          New Case
          <v-icon small color="orange"> mdi-file-send</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          width="100%"
          color="light-blue lighten-5"
          height="50px"
          @click="openCases"
        >
          Open Cases
          <v-icon small color="orange"> mdi-file-multiple </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          width="100%"
          color="light-blue lighten-5"
          height="50px"
          @click="assignments"
        >
          Assignments
          <v-icon small color="orange"> mdi-clipboard-text </v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          width="100%"
          color="light-blue lighten-5"
          height="50px"
          @click="doAssignment"
        >
          New Assignment
          <v-icon small color="orange"> mdi-file-send</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          width="100%"
          color="light-blue lighten-5"
          height="50px"
          @click="criminalScreen"
        >
          Registered Criminals
          <v-icon small color="orange"> mdi-clipboard-account</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          width="100%"
          color="light-blue lighten-5"
          height="50px "
          @click="reports"
        >
          Reports
          <v-icon small color="orange"> mdi-notebook-edit </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          width="100%"
          color="light-blue lighten-5"
          height="50px"
          @click="settings"
        >
          ADMIN settings
          <v-icon small color="orange">mdi-account-cog</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn width="100%" color="orange" height="50px" @click="logOut">
          Log Out
          <v-icon small color="black"> mdi-logout-variant</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.getters.user 
    },
  },
  methods: {
    logOut(){
      this.$router.push("/")
    },
    reports() {
      this.$router.push("/report");
    },
    settings() {
      this.$router.push("/settings");
    },
    doAssignment() {
      this.$router.push("/assignmentdo");
    },
    openCases() {
      this.$router.push("/opencase");
    },
    criminalScreen() {
      this.$router.push("/criminalscreen");
    },
    newCase() {
      this.$router.push("/casescreen");
    },
    assignments() {
      this.$router.push("/assignment");
    },
  },
};
</script>

<style scoped>
hr {
  margin: 30px 0px 30px 0px;
}

.content {
  padding-top: 50px;
}
</style>

