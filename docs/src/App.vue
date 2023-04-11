<template>
    <nav class="box m-2 flex flex-row items-center justify-between">
        <router-link to="/" class="text-xl no-link">FrekUI</router-link>
        <div class="flex flex-row gap-5">
            <router-link to="/about">Docs</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </nav>

    <div class="container mx-auto">

        <router-view/>
    </div>

</template>
<script setup lang="ts">
</script>