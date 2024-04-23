<script setup>
import { ref, inject } from "vue";
import TransactionItem from "@/components/TransactionItem.vue";

const { transaction } = inject("transaction");
</script>
<template>
  <h3>History</h3>
  <!-- listmap -->
  <p v-show="transaction.length <= 0">No record</p>
  <ul class="list" id="list" v-show="transaction.length > 0">
    <TransactionItem v-for="item in transaction" :item="item" :key="item.id" />
  </ul>
</template>
<style scoped>
.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}
p {
  text-align: center;
}
</style>
