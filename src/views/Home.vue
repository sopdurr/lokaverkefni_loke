<template class="template">
  <v-container>
    <h3>Please Log in</h3>
    <v-row class="login">
      <v-col cols="12" sm="6" md="3">
        <div class="login">
          Enter: John for admin and Bill for normal user.
        </div>
        <v-text-field
          color="orange"
          label="USER ID"
          v-model="id"
        ></v-text-field>
        <v-btn @click="logIn()" color="orange" width="100%"> LOG IN </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  props: {},
  data: function () {
    return {
      id: undefined,
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    logIn() {
      this.$store.commit("userName", this.id);
      this.users.forEach((user) => {
        if ((this.id == user.name) & (user.active == true)) {
          user.loggedIn = true;
          this.$router.push("/overview");
        }
      });
    },
  },
};
</script>

<style scoped>
.login,
h3 {
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  color: #e1f5fe;
  margin: 20px;
}
</style>