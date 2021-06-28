
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    report: [

    ],
    active: [
      true,
      false
    ],
    users: [
      {
        name: "Herra Hnetusmjör",
        policeNumber: 1007,
        password: "sjomli",
        email: "peanut@loke.is",
        active: true,
        admin: true,
        loggedIn: false,
        img: "https://direct.rhapsody.com/imageserver/images/alb.304097178/500x500.jpg"
      },
      {
        name: "Fred Flinstone",
        policeNumber: 1006,
        password: "jabbadabba",
        email: "freddief@loke.is",
        active: true,
        admin: false,
        loggedIn: false,
        img: "https://cdn.costumewall.com/wp-content/uploads/2018/08/fred-flintstone.jpg"
      }
    ],
    user: undefined,
    assignments: [
      { name: 'Interrogate the Kool-Aid figure from Family guy', employee: 'Fred Flinstone', closed: true },
      { name: 'Pickup trash in front of the police station', employee: 'Fred Flinstone', closed: false },
      { name: 'Take report from Gandalf the Grey', employee: 'Herra Hnetusmjör', closed: false },
    ],
    criminals: [
      {
        id: 1,
        name: 'Bjössi Bolla',
        homeAddress: 'Cream Street 10',
        age: 88,
        phoneNumber: 8005959,
        prisonTime: false,
        note: 'Teardrop\'s tattoo under right eye',
        img: 'data:image/jpeg;base64,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'
      },
      {
        id: 2,
        name: 'Fannar Programming-Teacher',
        homeAddress: 'Internet Cafe 99',
        age: 45,
        phoneNumber: 8008989,
        prisonTime: true,
        note: 'Be aware, can hack your mind',
        img: 'https://www.industryconnect.org/wp-content/uploads/2016/04/Computer-Nerd.jpg'
      },
      {
        id: 3,
        name: 'Bilbo Baggins',
        homeAddress: 'Bag-End',
        age: 51,
        phoneNumber: 5552222,
        prisonTime: false,
        note: 'Can make himself disappear',
        img: 'https://brixensteel.dk/4383-thickbox_avena/the-hobbit-sting-the-sword-of-bilbo-baggins.jpg'
      },
    ],
    victims: [
      { id: 1, name: 'Gaui Litli', homeAddress: 'Litli Bær', phoneNumber: 5412000, age: 68 },
      { id: 2, name: 'Harry Potter', homeAddress: 'Hogwarts', phoneNumber: 9992000, age: 20 },
      { id: 3, name: 'Gollum', homeAddress: 'Misty Mountains', phoneNumber: 6660006, age: 589 }
    ],
    severity: [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    crimeType: [
      { crime: "Arson" },
      { crime: "Burglary" },
      { crime: "Cyber Crime" },
      { crime: "Fraud" },
      { crime: "Hate Crime" },
      { crime: "Modern Slavery" },
      { crime: "Manslaughter" },
      { crime: "Robbery" },
    ],
    crimes: [
      {
        id: 1,
        name: undefined,
        crimePlace: 'Skalli Hraunbær',
        postalCode: 110,
        crimeType: 'Hate Crime',
        date: '2019-01-25',
        description: 'The criminal yelled at Gaui litli for 10 minutes straight',
        severity: 1,
        notes: 'Tánögl fannst á vettvangi',
        closed: true,
      },
      {
        id: 2,
        name: undefined,
        crimePlace: 'KFC Hafnarfirði',
        postalCode: 220,
        crimeType: 'Cyber Crime',
        date: '2021-06-27',
        description: 'The criminal hacked himself into Gringotts bank and stole all of Harry Potter\'s money',
        severity: 8,
        notes: 'Nimbus 3000 was found in suspect closet',
        closed: false,
      },
      {
        id: 3,
        name: undefined,
        crimePlace: 'Middle-Earth',
        postalCode: 666,
        crimeType: 'Burglary',
        date: '0001-01-01',
        description: 'The criminal stole the Ring from Gollum',
        severity: 9,
        notes: 'Bilbo has vanished',
        closed: false,
      },
    ],
    date: false,
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload)
    },
    addReport(state, payload) {
      state.report.push(payload);
    },
    deleteCriminal(state, payload) {
      let index = state.criminals.indexOf(payload);
      state.criminals.splice(index, 1);
    },
    addAssignment(state, payload) {
      if (payload.name != null || payload.name != undefined) {
        state.assignments.push(payload);
      }
    },
    addVictim(state, payload) {
      if (payload.name != null || payload.name != undefined &
        payload.employee != null || payload.employee != undefined
      ) {
        payload.id = state.victims.length + 1;
        state.victims.push(payload)
      }
    },
    addSuspects(state, payload) {
      if (payload.name != null || payload.name != undefined) {
        payload.id = state.criminals.length + 1;
        state.criminals.push(payload)
      }
    },
    assignmentDone(state, payload) {
      state.assignments[payload].closed = !state.assignments[payload].closed;
    },
    crimeDone(state, payload) {
      state.crimes[payload].closed = !state.crimes[payload].closed;
    },
    userName(state, payload) {
      if (payload != undefined) {
        state.user = payload;
      }
    },
    addCrime(state, payload) {
      if (payload.crimePlace != null || payload.crimePlace != undefined) {
        payload.id = state.crimes.length + 1;
        payload.closed = false;
        state.crimes.push(payload);
      }
    },
    sortAsc(state, payload) {
      if (payload) {
        state.crimes.sort(function compare(a, b) {
          var dateA = new Date(a.date);
          var dateB = new Date(b.date);
          return dateA - dateB;
        });
      }
    },
    sortDesc(state, payload) {
      if (payload) {
        state.crimes.sort(function compare(a, b) {
          var dateB = new Date(b.date);
          var dateA = new Date(a.date);
          return dateB - dateA;
        });
      }
    }
  },
  actions: {
  },
  getters: {
    active(state) {
      return state.active;
    },
    reports(state) {
      return state.report;
    },
    users(state) {
      return state.users;
    },
    victims(state) {
      return state.victims;
    },
    crimes(state) {
      state.crimes.forEach(c => {
        c.name = c.crimePlace + '/' + c.crimeType + '/' + c.date;
      })
      return state.crimes;
    },
    assignments(state) {
      return state.assignments;
    },
    criminals(state) {
      return state.criminals;
    },
    severity(state) {
      return state.severity;
    },
    user(state) {
      return state.user;
    },
    crimeType(state) {
      return state.crimeType;
    },
    crimeById: (state) => (id) => {
      let crime = undefined;
      state.crimes.forEach(c => {
        c.name = c.crimePlace + '/' + c.crimeType + '/' + c.date;
        if (c.id == id) {
          crime = c;
        }
      });
      return crime;
    },
    suspectById: (state) => (id) => {
      let suspect = undefined;
      state.criminals.forEach(c => {
        if (c.id == id) {
          suspect = c;
        }
      });
      return suspect;
    },
    victimById: (state) => (id) => {
      let victim = undefined;
      state.victims.forEach(v => {
        if (v.id == id) {
          victim = v;
        }
      });
      return victim;
    },
  }
})
