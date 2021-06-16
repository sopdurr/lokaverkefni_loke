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
          <v-btn x-small class="crimes" @click="closedCrimes">CLOSED</v-btn>
        </div>
        <ol v-if="all">
          <li v-for="(c, index) in crimes" :key="index">
            <input
              type="checkbox"
              :checked="c.closed"
              @click="crimeDone(index)"
            />
            <span v-bind:class="{ strike: c.closed }">
              {{ c.name }} {{ c.closed }} {{ c.crimeId }}
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
        <ol v-if="closed">
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
      closed: false,
      oldestFirst: false,
      searchTerm: "",
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
    setDates() {
      return this.$store.getters.setDates;
    },
  },
  methods: {
    allCrimes() {
      this.all = true;
      this.open = false;
      this.closed = false;
    },
    openCrimes() {
      this.all = false;
      this.open = true;
      this.closed = false;
    },
    closedCrimes() {
      this.all = false;
      this.open = false;
      this.closed = true;
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
  color: #e1f5fe;
}

input {
  padding-left: 10px;
}

.check:focus {
  outline: none;
}

h4 {
  display: inline;
}
</style>