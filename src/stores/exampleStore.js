import { defineStore } from 'pinia';
 
export const useExampleStore = defineStore('example', {

  state: () => ({

    message: 'Hello from Pinia!'

  }),

  actions: {

    updateMessage(newMessage) {

      this.message = newMessage;

    }

  }

});

 