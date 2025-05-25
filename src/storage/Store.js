import { defineStore } from 'pinia'

export const storage = defineStore('expenses', {
    state: () => ({
        expenses: [{id: 1, name: 'Default expense', amount: 100.0}]
    }),

    actions: {
        newExpense(expense) {
            const expenseId = this.expenses[this.expenses.length - 1];

            const newExpense = {
                id: expenseId,
                name: expense.name,
                amount: expense.amount,
            }

            this.expenses.push(newExpense);
        },

        deleteExpense(id) {
            this.expenses.splice(id, 1);
        }
    },

    persist: true,
});


export const themeStore = defineStore('theme', {
    state: () => ({
        isDark: false,
    }),

    actions: {
        toggleTheme() {
            this.isDark = !this.isDark;
            this.applyTheme();
        },

        applyTheme() {
            console.log(this.isDark);
            if (this.isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
    },

    persist: true
});
