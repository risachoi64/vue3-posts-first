// axios
const posts = [
	{ id: 1, title: '제목1', content: '내용1', createdAt: '2020-01-01' },
	{ id: 2, title: '제목2', content: '내용2', createdAt: '2020-01-02' },
	{ id: 3, title: '제목3', content: '내용3', createdAt: '2020-01-03' },
	{ id: 4, title: '제목4', content: '내용4', createdAt: '2020-01-04' },
	{ id: 5, title: '제목5', content: '내용5', createdAt: '2020-01-05' },
];

export function getPosts() {
	return posts;
}

export function getPostsById(id) {
	// const numberId = parseInt(id);
	return posts.find(item => item.id === id);
	//배열 내 데이터를 id로 조회. item id와 일치하는 id를 찾아라
}
