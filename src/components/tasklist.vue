<template>
  <v-container>
    <v-row class="content">
      <v-col @click="fullOverview">
        <v-btn
          @click="fullOverview"
          width="100%"
          color="light-blue lighten-5"
          height="50px"
          >Full Crime Overview</v-btn
        >
      </v-col>
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
      return this.$store.getters.users;
    },
  },
  methods: {
    logOut() {
      this.users.forEach((user) => {
        user.loggedIn = false;
        if (this.$route.path != "/") {
          this.$router.push("/");
        }
      });
    },
    reports() {
      this.$router.push("/report");
    },
    settings() {
      if (this.$store.getters.user == "Herra Hnetusmjör") {
        this.$router.push("/settings");
      }
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
    fullOverview() {
      this.$router.push("/fullcrimeoverview/1").catch(() => {});
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

