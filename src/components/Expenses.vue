<script setup>
import { storage } from '@/storage/Store';
import { computed } from 'vue';

const store = storage();

const totalExpense = computed(() => {
    return store.expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
});

const deleteExpense = (id) => {
    store.deleteExpense(id);
}
</script>

<template>
  <h1>Expenses page</h1>

  <ul class="list">
    <li v-for="expense in store.expenses" :key="expense.id" class="li-element">
        <div class="list-element">
            <h2>{{ expense.name }}</h2>
            <h2>{{ expense.amount }}$</h2>
        </div>

        <button class="delete-btn" @click="deleteExpense(expense.id)">Delete</button>
    </li>
  </ul>

  <h1 class="total-expense">Total expenses for this period: {{ totalExpense }}$</h1>
</template>
