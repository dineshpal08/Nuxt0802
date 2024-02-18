export const state = () => ({
  users: [],
  increment: 1,
});

export const mutations = {
  ADD_USER_DATA(state, payload) {
    state.users.push(payload);
  },

  INCREMENT_VALUE(state, payload) {
    state.increment = payload;
  },
};
