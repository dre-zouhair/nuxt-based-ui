<script setup lang="ts">

import {useAuthStore} from "~/store/auth";

definePageMeta({
  layout: 'unauthenticated'
});

const {login} = useAuthStore();

</script>

<template>
  <LanguageSwitcher/>
  <h1>{{ $t('welcome') }}</h1>
  <button @click="() => login({email: '', password:''})"> Login</button>
</template>

<style scoped>

</style>