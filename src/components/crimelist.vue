<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="inline"> <h4>Crimes list</h4> </span>

        <input
          class="check"
          type="text"
          v-model="searchTerm"
          placeholder="search"
        />
        <div>
          <v-btn x-small class="crimes" @click="allCrimes">ALL</v-btn>
          <v-btn x-small class="crimes" @click="openCrimes">OPEN</v-btn>
          <v-btn x-small class="crimes" @click="closedCrimes">CLOSED</v-btn> //
          <v-btn x-small class="date" @click="sortAsc">ASCENDING</v-btn>
          <v-btn x-small class="date" @click="sortDesc">DESCENDING</v-btn>
        </div>
        <ol v-if="all">
          <li v-for="(c, index) in crimes" :key="index">
            <input
              type="checkbox"
              :checked="c.closed"
              @click="crimeDone(index)"
            />
            <span v-bind:class="{ strike: c.closed }">
              {{ c.name }}
            </span>
          </li>
        </ol>
        <ol v-if="open">
          <li
            v-for="(c, index) in crimes"
            :key="index"
            v-show="c.closed === false"
          >
            <input
              type="checkbox"
              :checked="c.closed"
              @click="crimeDone(index)"
            />
            <span v-bind:class="{ strike: c.closed }">
              {{ c.name }}
            </span>
          </li>
        </ol>
        <ol v-if="close">
          <li
            v-for="(c, index) in crimes"
            :key="index"
            v-show="c.closed === true"
          >
            <input
              type="checkbox"
              :checked="c.closed"
              @click="crimeDone(index)"
            />
            <span v-bind:class="{ strike: c.closed }">
              {{ c.name }}
            </span>
          </li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    crime: Array,
  },
  data: function () {
    return {
      all: true,
      open: false,
      close: false,
      searchTerm: "",
      ascending: true,
      descending: true,
    };
  },
  computed: {
    active() {
      return this.$store.getters.active;
    },
    crimes() {
      return this.$store.getters.crimes.filter((item) => {
        return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },
  methods: {
    sortAsc() {
      this.$store.commit("sortAsc", this.ascending);
    },
    sortDesc() {
      this.$store.commit("sortDesc", this.descending);
    },
    allCrimes() {
      this.all = true;
      this.open = false;
      this.close = false;
    },
    openCrimes() {
      this.all = false;
      this.open = true;
      this.close = false;
    },
    closedCrimes() {
      this.all = false;
      this.open = false;
      this.close = true;
    },
    crimeDone(value) {
      this.$store.commit("crimeDone", value);
    },
  },
};
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}

.crimes {
  margin: 10px 10px 10px 0px;
}

h4 {
  display: inline;
  color: #e1f5fe;
}

input {
  color: red;
  padding-left: 10px;
}

.check:focus {
  outline: none;
}

.date {
  margin-left: 10px;
}
</style>