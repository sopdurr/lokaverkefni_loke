<template>
  <v-row>
    <v-col>
      <span>
        <h4>Register criminal to crime</h4>
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
        color="orange"
        @keypress="onlyNumbers($event)"
        label="Phone Number"
        v-model="newSuspects.phoneNumber"
      ></v-text-field>
      <v-text-field
        color="orange"
        @keypress="onlyNumbers($event)"
        label="Age"
        v-model="newSuspects.age"
      ></v-text-field>
      <v-text-field
        color="orange"
        label="Comment"
        v-model="newSuspects.note"
      ></v-text-field>
      <v-checkbox color="orange" label="Prisoned before ?"></v-checkbox>
      <v-btn width="100%" @click="addSuspects"> Register criminal </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      addCriminal: true,
      newSuspects: {},
    };
  },
  computed: {
    suspects() {
      return this.$store.getters.criminals;
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
    addSuspects() {
      this.$store.commit("addSuspects", this.newSuspects);
      this.newSuspects = {};
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin: 5px 0px 20px 0px;
}

.button {
  margin-top: 10px;
}

span {
  color: #e1f5fe;
}
</style>