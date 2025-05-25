import Expenses from "@/components/Expenses.vue";
import AddExpense from "@/components/AddExpense.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/expenses'},
    { path: '/expenses', component: Expenses},
    { path: '/add', component: AddExpense },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
