<template>
	<div>
		<h2>Home View</h2>
		<P>{{ $route.path }}</P>
		<button class="btn btn-primary" @click="goAboutPage">about</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
