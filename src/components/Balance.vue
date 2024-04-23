<script setup>
import { inject } from "vue";
import { formatCurrency } from "@/utils/helpers";
const { transaction } = inject("transaction");
</script>

<template>
  <div class="container">
    <h4>Your Balance</h4>
    <h1>
      {{
        formatCurrency(
          transaction.reduce((arr, cur) => arr + (cur?.amount || 0), 0)
        )
      }}
    </h1>
  </div>
</template>

<style scoped>
.container {
  margin: 30px auto;
  width: 400px;
}
</style>
