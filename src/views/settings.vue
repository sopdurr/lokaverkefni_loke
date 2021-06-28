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
        <v-text-field
          @keypress="onlyLetters($event)"
          color="orange"
          label="Name"
          v-model="newUser.name"
        ></v-text-field>
        <v-text-field
          color="orange"
          @keypress="onlyNumbers($event)"
          label="Badge number"
          v-model="newUser.policeNumber"
        ></v-text-field>
        <v-text-field
          color="orange"
          label="Email"
          v-model="newUser.email"
        ></v-text-field>
        <v-text-field
          color="orange"
          label="password"
          v-model="newUser.password"
        ></v-text-field>
        <v-text-field
          color="orange"
          label="Image url"
          v-model="newUser.img"
        ></v-text-field>
        <v-select
          color="orange"
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
      <v-col v-if="showUsers">
        <v-btn @click="showUsers = false">Overview of users</v-btn>
      </v-col>
      <v-col v-else>
        <v-btn @click="showUsers = true">Back</v-btn>
        <v-flex d-flex>
          <v-layout wrap>
            <v-flex md4 v-for="u in users" :key="u.name">
              <v-card width="100%">
                <v-img height="350" :src="u.img"></v-img>
                <v-card-title>{{ u.name }}</v-card-title>
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
      <v-col v-if="showAssignment">
        <v-btn @click="showAssignment = false">Set assignment</v-btn>
      </v-col>
      <v-col v-else>
        <v-btn @click="showAssignment = true">Back</v-btn>
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
      showAssignment: true,
      showUsers: true,
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
    onlyLetters(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z ]+$/.test(char)) return true;
      else e.preventDefault();
    },
    onlyNumbers(e) {
      let num = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(num)) return true;
      else e.preventDefault();
    },
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