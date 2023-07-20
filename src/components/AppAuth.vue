<template lang="">
  <!-- Auth Modal -->
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal" :class="hiddenClass">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="isOpen = false">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center" @click.prevent="tab = 'login'">
              <a
                class="block rounded py-3 px-4 transition"
                :class="tab == 'login' ? 'bg-blue-600 hover:text-white text-white' : ''"
                href="#"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center" @click.prevent="tab = 'register'">
              <a
                class="block rounded py-3 px-4 transition"
                :class="tab == 'register' ? 'bg-blue-600 hover:text-white text-white' : ''"
                href="#"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <login-form v-if="tab == 'login'" />

          <!-- Registration form -->
          <registration-form v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal.js'
import LoginForm from './LoginForm.vue';
import RegistrationForm from './RegistrationForm.vue';
export default {
  name: 'AppAuth',
  components:{LoginForm,RegistrationForm},
  data() {
    return {
      tab: 'login',
      schema: {
        Name: 'required|min:3|max:100|alphaSpaces',
        Email: 'required|min:3|max:100|email',
        Age: '',
        Password: '',
        Confirm_password: '',
        Country: '',
        Tos: ''
      }
    }
  },
  computed: {
    ...mapWritableState(useModalStore, ['hiddenClass', 'isOpen'])
  }
}
</script>
<style lang=""></style>
