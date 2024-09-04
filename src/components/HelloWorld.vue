<template>

  <div>

    <h1>{{ message }}</h1>

    <button @click="updateMessage('Hello, updated message!')">Update Message</button>

  </div>

</template>
 
<script>

import { useExampleStore } from '@/stores/exampleStore';
 
export default {

  setup() {

    const store = useExampleStore();

    return {

      message: store.message,

      updateMessage: store.updateMessage

    };

  }

};

</script>

 