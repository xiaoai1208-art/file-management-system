<script setup>

import { ref } from 'vue'


const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})


const emit = defineEmits([
  'update-note',
  'delete-note'
])


const showDeleteModal = ref(false)
const showEditModal = ref(false)

const editTitle = ref(props.note.title)
const editContent = ref(props.note.content)



const openEdit = () => {
  editTitle.value = props.note.title
  editContent.value = props.note.content
  showEditModal.value = true
}



const saveEdit = () => {

  emit('update-note', {
    id: props.note.id,
    title: editTitle.value,
    content: editContent.value
  })

  showEditModal.value = false

}



const confirmDelete = () => {

  emit('delete-note', props.note.id)

  showDeleteModal.value = false

}



const formatDate = (date) => {

  if (!date) return 'N/A'

  return new Date(
    date.replace(' ', 'T')
  ).toLocaleString()

}

</script>


<template>

<div
  class="
    bg-white
    rounded-xl
    shadow-md
    p-5
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
  "
>

  <h3 class="text-xl font-bold text-[#31322C] mb-2">
    {{ note.title }}
  </h3>


  <p class="text-[#847C74] mb-4">
    {{ note.content }}
  </p>


  <div class="text-sm text-[#847C74] mb-4">

    <p>
      Created:
      {{ formatDate(note.created_at) }}
    </p>

    <p>
      Updated:
      {{ formatDate(note.updated_at) }}
    </p>

  </div>


  <div class="flex gap-3">

    <button
      @click="openEdit"
      class="
        bg-[#847C74]
        text-white
        px-4
        py-2
        rounded-lg
        cursor-pointer
        hover:opacity-90
        transition
      "
    >
      Edit
    </button>


    <button
      @click="showDeleteModal=true"
      class="
        bg-[#DC6B6B]
        text-white
        px-4
        py-2
        rounded-lg
        cursor-pointer
        hover:opacity-90
        transition
      "
    >
      Delete
    </button>

  </div>

</div>




<!-- Edit Modal -->

<Teleport to="body">

<div
  v-if="showEditModal"
  class="
    fixed
    inset-0
    bg-black/40
    flex
    items-center
    justify-center
    z-50
  "
>

  <div
    class="
      bg-white
      rounded-xl
      shadow-xl
      p-6
      w-96
    "
  >

    <h2 class="text-xl font-bold text-[#31322C] mb-4">
      Edit Note
    </h2>


    <input
      v-model="editTitle"
      placeholder="Note title"
      class="
        w-full
        border
        rounded-lg
        p-3
        mb-3
      "
    />


    <textarea
      v-model="editContent"
      rows="5"
      placeholder="Note content"
      class="
        w-full
        border
        rounded-lg
        p-3
        mb-4
      "
    ></textarea>


    <div class="flex justify-end gap-3">

      <button
        @click="showEditModal=false"
        class="
          bg-[#F1EEE5]
          text-[#31322C]
          px-4
          py-2
          rounded-lg
          cursor-pointer
          hover:opacity-90
          transition
        "
      >
        Cancel
      </button>


      <button
        @click="saveEdit"
        class="
          bg-[#847C74]
          text-white
          px-4
          py-2
          rounded-lg
          cursor-pointer
          hover:opacity-90
          transition
        "
      >
        Save
      </button>

    </div>

  </div>

</div>

</Teleport>





<!-- Delete Modal -->

<Teleport to="body">

<div
  v-if="showDeleteModal"
  class="
    fixed
    inset-0
    bg-black/40
    flex
    items-center
    justify-center
    z-50
  "
>

  <div
    class="
      bg-white
      rounded-xl
      shadow-xl
      p-6
      w-80
    "
  >

    <h2 class="text-xl font-bold text-[#31322C] mb-3">
      Delete Note?
    </h2>


    <p class="text-[#847C74] mb-5">
      Are you sure you want to delete this note?
    </p>


    <div class="flex justify-end gap-3">

      <button
        @click="showDeleteModal=false"
        class="
          bg-[#F1EEE5]
          text-[#31322C]
          px-4
          py-2
          rounded-lg
          cursor-pointer
          hover:opacity-90
          transition
        "
      >
        Cancel
      </button>


      <button
        @click="confirmDelete"
        class="
          bg-[#DC6B6B]
          text-white
          px-4
          py-2
          rounded-lg
          cursor-pointer
          hover:opacity-90
          transition
        "
      >
        Delete
      </button>

    </div>

  </div>

</div>

</Teleport>


</template>