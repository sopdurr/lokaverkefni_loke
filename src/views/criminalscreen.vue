<template>
  <v-container>
    <v-row>
      <v-col>
        <span>
          <h4>Register new criminal</h4>
        </span>
        <v-text-field
          @keypress="onlyLetters($event)"
          color="orange"
          label="Name"
          v-model="newSuspects.name"
        ></v-text-field>
        <v-text-field
          color="orange"
          label="Home Address"
          v-model="newSuspects.homeAddress"
        ></v-text-field>
        <v-text-field
          @keypress="onlyNumbers($event)"
          color="orange"
          label="Phone Number"
          v-model="newSuspects.phoneNumber"
        ></v-text-field>
        <v-text-field
          @keypress="onlyNumbers($event)"
          color="orange"
          label="Age"
          v-model="newSuspects.age"
        ></v-text-field>
        <v-text-field
          color="orange"
          label="Comment"
          v-model="newSuspects.note"
        ></v-text-field>
        <v-checkbox
          color="orange"
          label="Prisoned before ?"
          v-model="newSuspects.prisonTime"
          :checked="true"
        ></v-checkbox>
        <span v-if="criminialSelected">
          <v-btn width="50%" @click="stopEdit">Close</v-btn>
          <v-btn width="50%" @click="deleteCriminal()">Delete</v-btn>
        </span>
        <span v-else>
          <v-btn width="100%" @click="addCriminal()"> Register criminal </v-btn>
        </span>
      </v-col>
      <v-col>
        <h4>Criminal list</h4>
        <input type="text" v-model="searchTerm" placeholder="search" />
        <v-list-group>
          <v-list-item
            label="choose from list"
            v-for="(criminal, index) in criminals"
            :key="index"
            @click="editCriminal(criminal)"
          >
            {{ criminal.name }} - Crime id:{{ criminal.id }}
          </v-list-item>
        </v-list-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "criminalscreen",
  components: {},
  data: function () {
    return {
      newSuspects: {},
      criminialSelected: false,
      searchTerm: "",
    };
  },
  computed: {
    criminals() {
      return this.$store.getters.criminals.filter((criminal) => {
        return criminal.name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
  },
  methods: {
    onlyNumbers(e) {
      let num = String.fromCharCode(e.keyCode);
      if (/^[0-9 ]+$/.test(num)) return true;
      else e.preventDefault();
    },
    onlyLetters(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z ]+$/.test(char)) return true;
      else e.preventDefault();
    },
    deleteCriminal() {
      this.$store.commit("deleteCriminal", this.newSuspects);
      this.stopEdit();
    },
    addCriminal() {
      this.$store.commit("addSuspects", this.newSuspects);
      this.newSuspects = {};
    },
    editCriminal(criminal) {
      this.newSuspects = criminal;
      this.criminialSelected = true;
    },
    stopEdit() {
      this.newSuspects = {};
      this.criminialSelected = false;
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

input {
  padding-left: 10px;
}

h4 {
  color: #e1f5fe;
  display: inline;
}

.color {
  background-color: #e1f5fe;
}
</style>