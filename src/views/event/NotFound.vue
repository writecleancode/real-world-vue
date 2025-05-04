<script setup lang="ts">
const { resource = 'page' } = defineProps<{
	resource: string;
}>();
</script>

<template>
	<h1>Oops!</h1>
	<h3>The {{ resource }} you're looking for it not here.</h3>
	<RouterLink :to="{ name: 'event-list' }">Back to the home page</RouterLink>
</template>

<style lang="scss" scoped></style>
