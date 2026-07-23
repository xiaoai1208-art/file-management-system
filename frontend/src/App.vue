<script setup>

import { ref, onMounted } from 'vue'

import NoteForm from './components/NoteForm.vue'
import NoteCard from './components/NoteCard.vue'

import {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} from './service/api'


const notes = ref([])

const errorMessage = ref('')

const isLoading = ref(false)



const loadNotes = async () => {

  try {

    isLoading.value = true
    errorMessage.value = ''

    const response = await getNotes()

    notes.value = response.data

  } catch (error) {

    errorMessage.value = 'Failed to load notes.'
    console.error(error)

  } finally {

    isLoading.value = false

  }

}




const addNote = async (note) => {

  try {

    errorMessage.value = ''

    await createNote(note)

    loadNotes()

  } catch (error) {

    errorMessage.value = 'Failed to create note.'
    console.error(error)

  }

}





const saveUpdate = async (note) => {

  try {

    errorMessage.value = ''

    await updateNote(
      note.id,
      {
        title: note.title,
        content: note.content
      }
    )

    loadNotes()

  } catch (error) {

    errorMessage.value = 'Failed to update note.'
    console.error(error)

  }

}

const removeNote = async (id) => {

  try {

    errorMessage.value = ''

    await deleteNote(id)

    loadNotes()

  } catch (error) {

    errorMessage.value = 'Failed to delete note.'
    console.error(error)

  }

}

onMounted(() => {

  loadNotes()

})


</script>


<template>

<div
  class="
    min-h-screen
    bg-[#F7F3EC]
    p-4
    sm:p-6
    lg:p-8
  "
>

  <div class="max-w-4xl mx-auto">


    <!-- Header -->

<header
  class="
    bg-[#F1EEE5]
    rounded-xl
    border
    border-[#E5DFD5]
    shadow-[0_10px_30px_rgba(49,50,44,0.15)]
    p-6
    mb-8
    transition-all
    duration-300
  "
>

  <h1
    class="
      text-3xl
      sm:text-4xl
      font-bold
      text-[#31322C]
    "
  >
    📁 File Management System
  </h1>


  <p
    class="
      text-[#847C74]
      mt-2
    "
  >
    Manage your notes efficiently
  </p>

</header>


    <!-- Create Note -->

    <NoteForm
      @add-note="addNote"
    />





    <!-- Global Error -->

    <div
      v-if="errorMessage"
      class="
        mt-5
        bg-[#DC6B6B]/10
        text-[#DC6B6B]
        p-4
        rounded-xl
      "
    >
      {{ errorMessage }}
    </div>





    <h2
      class="
        text-2xl
        font-bold
        text-[#31322C]
        mt-10
        mb-5
      "
    >
      My Notes
    </h2>





    <!-- Loading -->

    <div
      v-if="isLoading"
      class="
        bg-white
        rounded-xl
        shadow-md
        p-8
        text-center
        text-[#847C74]
      "
    >
      Loading notes...
    </div>





    <!-- Empty State -->

    <div
      v-else-if="notes.length === 0"
      class="
        bg-white
        rounded-xl
        shadow-md
        p-8
        text-center
        text-[#847C74]
      "
    >
      No notes available.
    </div>





    <!-- Notes List -->

    <div
      v-else
      class="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-5
      "
    >

      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @update-note="saveUpdate"
        @delete-note="removeNote"
      />

    </div>


  </div>

</div>

</template>