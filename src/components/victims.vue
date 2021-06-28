<template>
  <v-row>
    <v-col>
      <span>
        <h4>Victim</h4>
      </span>
      <v-text-field
        @keypress="onlyLetters($event)"
        color="orange"
        label="Name"
        v-model="newVictim.name"
      ></v-text-field>
      <v-text-field
        color="orange"
        label="Home Address"
        v-model="newVictim.homeAddress"
      ></v-text-field>
      <v-text-field
        color="orange"
        @keypress="onlyNumbers($event)"
        label="Phone Number"
        v-model="newVictim.phoneNumber"
      ></v-text-field>
      <v-text-field
        color="orange"
        @keypress="onlyNumbers($event)"
        label="Age"
        v-model="newVictim.Age"
      ></v-text-field>
      <v-btn width="100%" @click="addVictim">Add victim</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      newVictim: {},
    };
  },
  computed: {
    victims() {
      return this.$store.getters.victims;
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
      if (/^[0-9 ]+$/.test(num)) return true;
      else e.preventDefault();
    },
    addVictim() {
      this.$store.commit("addVictim", this.newVictim);
      this.newVictim = {};
    },
  },
};
</script>

<style scoped>
span {
  color: #e1f5fe;
}
</style>