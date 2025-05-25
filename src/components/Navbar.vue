<script setup>
import { themeStore } from '@/storage/Store';

    const links = [
        { name: 'Home', url: 'expenses' },
        { name: 'Add expense', url: 'add' },
    ]

    const theme = themeStore();

    const changeTheme = () => {
        theme.toggleTheme();
        theme.applyTheme();
    }

</script>

<template>
    <div class="navbar-space-between">

        <ul class="navbar">
            <li v-for="(link, index) in links" :key="index">
                <a :class="$route.fullPath === `/${link.url}` ? 'navbar-link-active' : 'navbar-link-inactive'" class="navbar-link" :href="link.url">{{ link.name }}</a>
            </li>
        </ul>

        <button @click="changeTheme" class="btn">Change theme</button>
    </div>

</template>
