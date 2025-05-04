<script setup lang="ts">
const props = defineProps<{
	event: any;
}>();
</script>

<template>
	<p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
	<p>{{ event.description }}</p>
</template>

<style lang="scss" scoped></style>
