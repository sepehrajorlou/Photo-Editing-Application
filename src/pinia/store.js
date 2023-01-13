import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { IsImageAvailable: false }
  },
  actions: {
    IsImageAvailableTrueFalseFunction(params) {
      return this.IsImageAvailable = params;
    }
  }

})