<template lang="">
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link  class="text-white font-bold uppercase text-2xl mr-4" to="/" exact-active-class='no-active'>Music</router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <router-link  class="px-2 text-white" to="#" @click.prevent="toggleAuthModal"
              >Login / Register</router-link
            >
          </li>
          <template v-else>
            <li v-if="userStore.userLoggedIn">
              <a  class="px-2 text-white"  @click.prevent="userStore.signOut">Logout</a>
            </li>
            <li>
              <router-link  class="px-2 text-white" to="/manage">Manage</router-link>
            </li>
          </template>
          <li><router-link  class="px-2 text-white" to="/about">about</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import userStore from '@/stores/user'

export default {
  name: 'appHeader',
  computed: {
    ...mapStores(useModalStore, userStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    }
  }
}
</script>
<style lang=""></style>
