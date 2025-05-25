<script setup>
import { storage } from '@/storage/Store';
import { ref } from 'vue';

const store = storage();

const newExpenseName = ref('');
const newExpenseAmount = ref(null);

const nameError = ref(null);
const amountError = ref(null);

const postExpense = () => {
    let name = newExpenseName.value;
    let amount = newExpenseAmount.value;

    if (!name.trim()) {
        nameError.value = 'Enter a name';
        return;
    } else if (name.length > 40) {
        nameError.value = 'Enter a name smaller than 40 chars';
        return;
    }

    if (!amount || amount <= 0) {
        amountError.value = 'Enter an amount > 0';
        return;
    }

    store.newExpense({ name, amount });

    newExpenseName.value = '';
    newExpenseAmount.value = null;

    amountError.value = null;
    nameError.value = null;
}

</script>

<template>
    <h1>Add Expense page</h1>

    <form class="form" @submit.prevent="postExpense">
        <input placeholder="Name" class="form-input" type="text" v-model="newExpenseName">
        <p v-if="nameError" class="error-message">{{ nameError }}</p>

        <input placeholder="Amount" class="form-input" type="number" v-model="newExpenseAmount">
        <p v-if="amountError" class="error-message">{{ amountError }}</p>

        <input class="submit-btn" type="submit" name="Submit">
    </form>
</template>