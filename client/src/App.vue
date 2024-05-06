<script setup>
import WouldYouRather from './components/./WouldYouRather.vue'

// object syntax
import { ref, onMounted } from 'vue'
import wyrService from "./services/wyrService.js";




// Data for the two answers and the question
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// This will store the users answer after they make choice
const userSelection = ref('')


onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {



    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2

  })
})


function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose: ${userChoice}`
}

</script>

<template>

  <div id="app-component">
  <h1>Would You Rather?</h1>

<!--  This is referencing the child component, Would You Rather-->
<!--  May see this is would-you-rather, but use the one that I am here so its easier-->
  <WouldYouRather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:choice-selected="updateUserSelection"
  >
  </WouldYouRather>


<p> {{ userSelection}} </p>

  </div>

</template>

<!-- These will affect the child component, because this is the parent-->
<style scoped>
p {
  font-family: Gadugi;
}

#app-component {
  background-color: blue;
  padding: 40px;
}


</style>
