<script setup lang="ts">

definePageMeta({
  layout: 'unauthenticated'
});

</script>

<template>
  <LanguageSwitcher/>
  <h1>{{ $t('welcome') }}</h1>
</template>

<style scoped>

</style>