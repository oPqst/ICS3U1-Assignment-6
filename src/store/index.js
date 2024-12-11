import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
  const cart = ref(new Map());

  return { cart };
});

export const useStorePassword = defineStore('main', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(userData) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
      useStore().cart.clear();
    },
  },
});
