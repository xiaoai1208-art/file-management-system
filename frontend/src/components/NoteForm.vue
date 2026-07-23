<script setup>

import { ref, watch } from 'vue'


const props = defineProps({
  editingNote: {
    type: Object,
    default: null
  }
})


const emit = defineEmits([
  'add-note',
  'update-note'
])


const title = ref('')
const content = ref('')
const errorMessage = ref('')


watch(
  () => props.editingNote,
  (note) => {

    if (note) {
      title.value = note.title
      content.value = note.content
    } else {
      title.value = ''
      content.value = ''
    }

    errorMessage.value = ''

  },
  { immediate: true }
)



const submitNote = () => {

  if (!title.value.trim() || !content.value.trim()) {

    errorMessage.value = 'Please fill in all fields'
    return

  }


  errorMessage.value = ''


  const noteData = {
    title: title.value,
    content: content.value
  }


  if (props.editingNote) {

    emit('update-note', {
      id: props.editingNote.id,
      ...noteData
    })

  } else {

    emit('add-note', noteData)

  }


  title.value = ''
  content.value = ''

}

</script>


<template>

<div class="bg-white rounded-xl shadow-md p-6">

  <h2 class="text-2xl font-bold text-[#31322C] mb-4">
    {{ editingNote ? 'Edit Note' : 'Create New Note' }}
  </h2>


  <input
    v-model="title"
    placeholder="Note title"
    class="
      w-full
      border
      rounded-lg
      p-3
      mb-3
      focus:outline-none
      focus:ring-2
      focus:ring-[#847C74]
    "
  />


  <textarea
    v-model="content"
    placeholder="Note content"
    rows="5"
    class="
      w-full
      border
      rounded-lg
      p-3
      mb-3
      focus:outline-none
      focus:ring-2
      focus:ring-[#847C74]
    "
  ></textarea>


  <!-- Error Message -->
  <div
    v-if="errorMessage"
    class="
      bg-[#DC6B6B]/10
      text-[#DC6B6B]
      p-3
      rounded-lg
      mb-3
      text-sm
    "
  >
    {{ errorMessage }}
  </div>


  <button
    @click="submitNote"
    class="
      bg-[#847C74]
      text-white
      px-5
      py-2
      rounded-lg
      cursor-pointer
      hover:opacity-90
      transition
    "
  >
    {{ editingNote ? 'Update Note' : 'Add Note' }}
  </button>

</div>

</template>