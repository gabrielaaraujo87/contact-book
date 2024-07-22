<template>
    <div class="p-5 bg-purpleLight rounded shadow-md">
      <input v-model="search" placeholder="Search contacts" class="mb-4 p-2 w-full border border-purpleDark rounded" />
      <ul class="list-none p-0">
        <li v-for="contact in filteredContacts" :key="contact.id" class="mb-2">
          <router-link :to="'/contact/' + contact.id" class="text-purpleDark font-bold hover:underline hover:text-purpleDarker">
            {{ contact.lastName }}, {{ contact.firstName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: '',
        contacts: JSON.parse(localStorage.getItem('contacts')) || []
      }
    },
    computed: {
      filteredContacts() {
        return this.contacts.filter(contact => 
          contact.firstName.toLowerCase().includes(this.search.toLowerCase()) || 
          contact.lastName.toLowerCase().includes(this.search.toLowerCase())
        ).sort((a, b) => a.lastName.localeCompare(b.lastName))
      }
    }
  }
  </script>