<script lang="ts" setup>

const {locale, setLocale} = useI18n();

const locales = [
  {value: "en", label: "English"},
  {value: "fr", label: "Français"},
  {value: "ar", label: "العربية"},
];

watchEffect(() => {
  if (process.browser && localStorage && locale.value) {
    localStorage.setItem('persisted-locale', locale.value);
  }
});

</script>

<template>
  <div>
    <button v-for="local in locales" @click="() => setLocale(local.value)">{{ local.label }}</button>
  </div>
</template>