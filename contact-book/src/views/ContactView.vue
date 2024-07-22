<template>
    <div>
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <router-link :to="'/edit/' + contact.id" class="text-purpleDark hover:underline">Edit</router-link>
      <button @click="deleteContact" class="ml-4 text-red-600">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contact: {}
      }
    },
    created() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || []
      this.contact = contacts.find(c => c.id === this.$route.params.id)
    },
    methods: {
      deleteContact() {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []
        contacts = contacts.filter(c => c.id !== this.$route.params.id)
        localStorage.setItem('contacts', JSON.stringify(contacts))
        this.$router.push('/')
      }
    }
  }
  </script>