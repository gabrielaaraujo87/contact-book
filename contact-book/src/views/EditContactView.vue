<template>
    <div>
      <h2>Edit Contact</h2>
      <form @submit.prevent="editContact">
        <input v-model="contact.firstName" placeholder="First Name" required class="mb-2 p-2 w-full border border-purpleDark rounded"/>
        <input v-model="contact.lastName" placeholder="Last Name" required class="mb-2 p-2 w-full border border-purpleDark rounded"/>
        <input v-model="contact.email" placeholder="Email" required class="mb-2 p-2 w-full border border-purpleDark rounded"/>
        <button type="submit" class="bg-purpleDark text-white p-2 rounded">Save</button>
      </form>
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
      editContact() {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []
        const index = contacts.findIndex(c => c.id === this.contact.id)
        if (index !== -1) {
          contacts.splice(index, 1, this.contact)
          localStorage.setItem('contacts', JSON.stringify(contacts))
          this.$router.push(`/contact/${this.contact.id}`)
        }
      }
    }
  }
  </script>