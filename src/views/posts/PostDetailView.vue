<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">{{ form.createdAt }}</p>
		<hr class="my-4" />
		<div class="row">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostsById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	//데이터 주는 쪽에서 쓰는 함수
	id: Number,
});

//defineEmits()emit 옵션을 사용하기 위해 선언하는 Vue 내장 APIs로,
// 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 전달할 때 명시하고 사용

const router = useRouter();
// const route = useRoute();
// const id = route.params.id;

const form = ref({});

const fetchPost = () => {
	const data = getPostsById(props.id);
	form.value = { ...data };
};

fetchPost();

const goListPage = () =>
	router.push({
		name: 'PostList',
	});
const goEditPage = () =>
	router.push({
		name: 'PostEdit',
		params: {
			id: props.id,
		},
	});
</script>

<style lang="scss" scoped></style>
