<script setup>
import { ref } from "vue";
import ToggleComponent from './renderless-components/ToggleComponent.vue'
import { AsyncModal } from "./async-modal/AsyncModal";

const showModal = ref(false);
</script>

<template>
 <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
  <div class="comp">
    <label class="switch">
      <input type="checkbox" :value="checkbox" @click="toggleCheckbox" />
      <div class="slider rounded" :class="checkbox ? 'active' : ''"></div>
    </label>
  </div>
 </ToggleComponent>

 <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
    <div class="comp">
      <button class="toggle-button" @click="toggleCheckbox">
        Toggle | <span>{{ checkbox ? "Yes 😀" : "No 😔" }}</span>
      </button>
    </div>
  </ToggleComponent>

  <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
    <div class="comp">
      <button
        :class="['tab-button', { active: checkbox }]"
        @click="toggleCheckbox"
      >
        On
      </button>
      <button
        :class="['tab-button', { active: !checkbox }]"
        @click="toggleCheckbox"
      >
        Off
      </button>
    </div>
  </ToggleComponent>


  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <AsyncModal v-if="showModal" :show="showModal" @close="showModal = false" />
</template>

<style scoped>
  @import './style.css';
</style>
