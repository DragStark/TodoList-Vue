export default {
    handleAddItem({ commit }, title) {
      if (title === "") alert("bạn chưa nhập gì");
      else commit("addItem", title);
    },
    handleRemoveItem({ commit }, id) {
        commit('removeItem',id)
    },
    handleSetState({ commit }, args) {
      commit("setState", args);
    },
    handleStartEdit({ commit }, id) {
      commit('changeEditIndex',id)
    },
    handleEndEdit({ commit }, args) {
      commit('setTitle',args)
    },
    handleChangeFilter({ commit }, filter) {
      commit('changeFilter', filter)
    },
    handleClearDone({ commit }) {
      commit('clearDone')
    },
  }