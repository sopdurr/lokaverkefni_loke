<template>
  <v-row>
    <v-col>
      <span>
        <h4>Victim</h4>
      </span>
      <v-text-field label="Name" v-model="newVictim.name"></v-text-field>
      <v-text-field
        label="Home Address"
        v-model="newVictim.homeAddress"
      ></v-text-field>
      <v-text-field
        label="Phone Number"
        v-model="newVictim.phoneNumber"
      ></v-text-field>
      <v-text-field label="Age" v-model="newVictim.Age"></v-text-field>
      <v-btn width="100%" @click="addVictim">Add victim</v-btn>
      <div v-for="v in victims" :key="v.name">
        {{ v.name }} / {{ v.homeAddress }} {{v.crimeId}}
      </div>
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