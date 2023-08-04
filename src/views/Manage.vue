<template lang="">
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <UploadView />
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <composition-item v-for="(song, index) in songs" :key="index" :song="{song}"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import userStore from '@/stores/user'
import UploadView from '@/components/UploadView.vue'
import CompositionItem from '@/components/CompositionItem.vue'
import { songsCollection, auth } from '@/includes/firebase.js'
export default {
  name: 'Manage',
  components: { UploadView, CompositionItem },
  data() {
    return {
      songs: []
    }
  },
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()
    snapshot.forEach((document) => {
      let song = {
        ...document.data(),
        docId: document.id
      }
      this.songs.push(song)
      console.log(this.songs)
    })
  }

  // beforeRouteEnter (to, from, next) {
  //     let user= userStore()
  //     if(user.userLoggedIn){
  //         next()
  //     }
  //     else{
  //         next({name:'home'})
  //     }
  // }
}
</script>
<style lang=""></style>
