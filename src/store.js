import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    values: null
  },
  getters: {
    values(state) {
      if (state.values === null) {
        return [];
      }
      return state.values;
    },
    isEmpty(state) {
      return state.values === null;
    }
  },
  mutations: {
    setValues(state, values) {
      state.values = null;
      state.values = values;
    },
    clearValues(state) {
      state.values = null;
    }
  },
  plugins: [createPersistedState()]
});
