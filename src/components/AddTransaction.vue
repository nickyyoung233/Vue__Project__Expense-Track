<script setup>
import { inject, ref } from "vue";

const { addTransaction } = inject("transaction");

const textInput = ref("");
const amountInput = ref("");

const submitHandler = () => {
  addTransaction(textInput.value, Number(amountInput.value));
  textInput.value = "";
  amountInput.value = "";
};
</script>
<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="text">Text</label>
      <input
        type="text"
        name="text"
        id="text"
        v-model="textInput"
        placeholder="Enter text..."
      />
    </div>
    <div>
      <label for="amount"
        >Amount<br />
        (negative - expense, positive - income)</label
      >
      <input type="number" name="amount" id="amount" v-model="amountInput" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>
<style scoped></style>
