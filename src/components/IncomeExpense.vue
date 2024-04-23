<script setup>
import { inject } from "vue";
import { formatCurrency } from "@/utils/helpers";

const { transaction } = inject("transaction");
</script>

<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p class="money plus">
        {{
          formatCurrency(
            transaction.reduce((accumulator, currentValue) => {
              if (currentValue?.amount > 0)
                return accumulator + currentValue?.amount;
              else return accumulator;
            }, 0)
          )
        }}
      </p>
    </div>
    <div>
      <h4>Expense</h4>
      <p class="money minus">
        {{
          formatCurrency(
            transaction.reduce((accumulator, currentValue) => {
              if (currentValue?.amount < 0)
                return accumulator + currentValue?.amount;
              else return accumulator;
            }, 0)
          )
        }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.inc-exp-container {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}
.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}
</style>
