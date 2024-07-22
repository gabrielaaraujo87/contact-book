<template>
    <div>
      <h2>Add Contact</h2>
      <form @submit.prevent="addContact">
        <input v-model="firstName" placeholder="First Name" required class="mb-2 p-2 w-full border border-purpleDark rounded"/>
        <input v-model="lastName" placeholder="Last Name" required class="mb-2 p-2 w-full border border-purpleDark rounded"/>
        <input v-model="email" placeholder="Email" required class="mb-2 p-2 w-full border border-purpleDark rounded"/>
        <button type="submit" class="bg-purpleDark text-white p-2 rounded">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: ''
      }
    },
    methods: {
      addContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || []
        const newContact = {
          id: Date.now().toString(),
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        }
        contacts.push(newContact)
        localStorage.setItem('contacts', JSON.stringify(contacts))
        this.$router.push(`/contact/${newContact.id}`)
      }
    }
  }
  </script>