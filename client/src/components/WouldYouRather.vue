

<!-- Script Element -->
<!-- Setup is new, but allows us to not have to return our variables "CONST" -->
<script setup>
import { ref, watch } from 'vue'

// defineProps is what he parents passed to the child, and it is being stores in a prop
// String is a typer, upper case, this is what the code is expecting
defineProps({
  question: String,
  answer1: String,
  answer2: String,
})

// can be anything, make sure to be descriptive
const emit = defineEmits([
    'choice-selected'
])


const choice = ref(null)

// function choiceMade() {
//  emit event to tell parent that the user has made a choice.
//   choice.value is getting what the user selected, that is stored in const choice
//   emit('choice-selected', choice.value)
// }

watch(choice, () => {
  emit('choice-selected', choice.value)
})

</script>





<!--Template Element is VUE SPECIFIC for html use, and this is the same as I have been doing -->
<template>

  <div id="wyr">
    <h2>Make Your Choice!</h2>

    <p>{{ question }}</p>


<!--  for radio buttons, you can use v-on:change in the input, and use choice-selected in this instance -->
<!--  You can do that or you can use the watch function, it does the same thing. Seems like it my preference -->
    <div id="radio-buttons">
<!--  using v-model and v-bind, I can make it so that they use the choice const to only select one at a time. -->
        <input v-model="choice" v-bind:value="answer1"  type="radio" id="answer-1">
        <label for="answer-1"> {{ answer1 }} </label>


<!--  This is setting it so that when this one is selected, it will only affect one of the buttons -->
      <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-1">
      <label for="answer-2"> {{ answer2 }} </label>

    </div>
  </div>

</template>






<!--Style Element-->
<!-- scoped means specific component and not affecting the whole page -->
<style scoped>
#wyr {
  background-color: hotpink;
}

P {
  font-family: fantasy;
}

</style>
