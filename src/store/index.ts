import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPopupOpen: false,
  },
  mutations: {
    OPEN_POPUP(state) {
      state.isPopupOpen = true;
    },
    CLOSE_POPUP(state) {
      state.isPopupOpen = false;
    },
  },
  actions: {
    openPopup({ commit }) {
      commit("OPEN_POPUP");
      document.body.classList.add("popuplock");
    },
    closePopup({ commit }) {
      commit("CLOSE_POPUP");
      document.body.classList.remove("popuplock");
    },
  },
  getters: {
    isPopupOpen: (state) => state.isPopupOpen,
  },
});
