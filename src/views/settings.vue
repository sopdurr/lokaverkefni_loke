<template>
  <v-container>
    <v-row>
      <v-col>
        <h4>Logged in</h4>
        <v-card
          width="100%"
          v-for="(u, index) in users"
          :key="u.name"
          v-show="index === 0"
        >
          <v-img height="350" :src="u.img"></v-img>
          <v-card-title>Captain: {{ u.name }}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
            <div class="my-4 text-subtitle-1"></div>
            <div>Badge number: {{ u.policeNumber }}</div>
            <div class="my-4 text-subtitle-1"></div>
            <v-divider class="mx-"></v-divider>
            <div class="my-4 text-subtitle-1"></div>
            Email: {{ u.email }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <h4>Register new user</h4>
        <v-text-field label="Name" v-model="newUser.name"></v-text-field>
        <v-text-field
          label="Badge number"
          v-model="newUser.policeNumber"
        ></v-text-field>
        <v-text-field label="Email" v-model="newUser.email"></v-text-field>
        <v-text-field
          label="password"
          v-model="newUser.password"
        ></v-text-field>
        <v-text-field label="Image url" v-model="newUser.img"></v-text-field>
        <v-select
          label="active user"
          v-model="newUser.active"
          :items="active"
          item-text="active"
        >
        </v-select>
        <span v-if="userSelected">
          <v-btn width="100%" @click="stopEdit">Close</v-btn>
        </span>
        <span v-else>
          <v-btn width="100%" @click="addUser()"> Register User </v-btn>
        </span>
      </v-col>
      <v-col>
        <h4>Change user</h4>
        <v-list-group>
          <v-list-item
            v-for="(u, index) in users"
            :key="index"
            @click="editUser(u)"
          >
            {{ u.name }}
          </v-list-item>
        </v-list-group>
      </v-col>
    </v-row>
    <v-container></v-container>
    <hr />
    <br />
    <v-row>
      <v-col v-if="show">
        <v-btn @click="show = false">Overview of users</v-btn>
      </v-col>
      <v-col v-else>
        <v-btn @click="show = true">Back</v-btn>
        <v-flex d-flex>
          <v-layout wrap>
            <v-flex md4 v-for="u in users" :key="u.name">
              <v-card width="100%">
                <v-img height="350" :src="u.img"></v-img>
                <v-card-title>Captain: {{ u.name }}</v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0"> </v-row>
                  <div class="my-4 text-subtitle-1"></div>
                  <div>Badge number: {{ u.policeNumber }}</div>
                  <div class="my-4 text-subtitle-1"></div>
                  <v-divider class="mx-"></v-divider>
                  <div class="my-4 text-subtitle-1"></div>
                  Email: {{ u.email }}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-col>
      <v-col v-if="show1">
        <v-btn @click="show1 = false">Set assignment</v-btn>
      </v-col>
      <v-col v-else>
        <v-btn @click="show1 = true">Back</v-btn>
        <newassignment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import newassignment from "../components/newassignment.vue";
export default {
  components: {
    newassignment,
  },
  data: function () {
    return {
      show1: true,
      show: true,
      newUser: {},
      userSelected: false,
    };
  },
  computed: {
    active() {
      return this.$store.getters.active;
    },
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    addUser() {
      this.$store.commit("addUser", this.newUser);
      this.newUser = {};
    },
    editUser(u) {
      this.newUser = u;
      this.userSelected = true;
    },
    stopEdit() {
      this.newUser = {};
      this.userSelected = false;
    },
  },
};
</script>

<style scoped>
h4 {
  margin: 10px 0px 10px 0px;
  color: #e1f5fe;
}
</style>