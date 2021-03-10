<template>
  <div class="container">
    
    <div class="col-6">
      <!-- <b-card>
        <div>
      <label>Enter email id:</label>
    <input type="text" placeholder="Enter email" @submit="onSubmit" @reset="onReset" v-if="show" required class="form-control">
        </div>
        <div class="mt-3">
      <label >Enter password:</label>
    <input type="password" placeholder="Enter password" class="form-control">
     </div>


       
     <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      </b-card> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>


