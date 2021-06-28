<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>CRIME </v-card-title>
          <v-card-text class="mx-0">
            NAME OF CRIME: {{ crimes.name }}
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="container">
            <v-row align="center" class="mx-0">
              CRIMEPLACE: {{ crimes.crimePlace }}
            </v-row>
            <v-row class="mx-0"> CRIMETYPE: {{ crimes.crimeType }} </v-row>
            <v-row class="mx-0"> DESCRIPTION: {{ crimes.description }} </v-row>
            <v-row class="mx-0"> SEVERITY: {{ crimes.severity }} </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title> CRIMINAL </v-card-title>
          <v-card-text class="mx-0">
            NAME: {{ criminals.name }}
            <v-img height="100" width="100" :src="criminals.img"></v-img>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="container">
            <v-row align="center" class="mx-0">
              ADDRESS: {{ criminals.homeAddress }}
            </v-row>
            <v-row class="mx-0"> AGE: {{ criminals.age }} </v-row>
            <v-row class="mx-0">
              PHONE NUMBER: {{ criminals.phoneNumber }}
            </v-row>
            <v-row class="mx-0"> NOTE: {{ criminals.note }} </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title> THE VICTIM </v-card-title>
          <v-card-text class="mx-0"> NAME: {{ victim.name }} </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="container">
            <v-row align="center" class="mx-0">
              ADDRESS: {{ victim.homeAddress }}
            </v-row>
            <v-row class="mx-0"> AGE: {{ victim.age }} </v-row>
            <v-row class="mx-0"> PHONE NUMBER: {{ victim.phoneNumber }} </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <input class="input" type="text" placeholder="ID" v-model="crime" />
    <div>ENTER: 1 to {{ crimeLength }}</div>
    <v-btn @click="move">See another crime</v-btn>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      indexOf: 0,
      crime: undefined,
    };
  },
  computed: {
    crimeLength() {
      return this.$store.getters.crimes.length;
    },
    crimes() {
      let crimeId = this.$route.params.id;
      return this.$store.getters.crimeById(crimeId);
    },
    criminals() {
      let criminalId = this.$route.params.id;
      return this.$store.getters.suspectById(criminalId);
    },
    victim() {
      let victimId = this.$route.params.id;
      return this.$store.getters.victimById(victimId);
    },
  },
  methods: {
    move() {
      this.$router.push("/fullcrimeoverview/" + this.crime).catch(() => {});
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 10px;
}

.input {
  outline: black;
}

.input::placeholder {
  color: black;
}
</style>