<template> 

  <div class="d-flex justify-content-center my-5"> 

    <div class="spinner-border" role="status"> 

      <span class="visually-hidden">Loading...</span> 

    </div> 

  </div> 

</template> 

 

<script> 

export default { 

  name: 'LoadingSpinner' 

}; 

</script> 

 

<style scoped> 

.spinner-border { 

  width: 3rem; 

  height: 3rem; 

} 

</style> 