<!-- optionalAPI -->
<!-- <script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script> -->

<!-- compositionAPI -->
<script setup>
import { provide, ref } from "vue";

import Header from "@/components/Header.vue";
import Balance from "@/components/Balance.vue";
import IncomeExpense from "@/components/IncomeExpense.vue";
import TransactionList from "@/components/TransactionList.vue";
import AddTransaction from "@/components/AddTransaction.vue";

// const arr = ref([
//   {
//     id: 1,
//     text: "Flower",
//     amount: -20.0,
//   },
//   {
//     id: 2,
//     text: "Shoes",
//     amount: -200.0,
//   },
//   {
//     id: 3,
//     text: "Income",
//     amount: 500.0,
//   },
//   {
//     id: 4,
//     text: "Movie",
//     amount: -40.0,
//   },
// ]);
const arr = ref([]);

const deleteTransaction = (id) => {
  arr.value = arr.value.filter((item) => item.id !== id);
};

const addTransaction = (text, amount) => {
  // console.log(text.value, amount.value);
  arr.value.push({
    id: new Date().getTime(),
    text,
    amount,
  });
};

provide(
  /* 注入名 */ "transaction",
  /* 值 */ { transaction: arr, deleteTransaction, addTransaction }
);
</script>

<template>
  <Header />
  <Balance />
  <IncomeExpense />
  <TransactionList />
  <AddTransaction />
</template>

<style lang="scss" scoped></style>
