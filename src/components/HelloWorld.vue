<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
		starter
	</p>
	<p>
		Install
		<a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
	<el-button type="info" @click="login"><svg-icon icon-class="test" />SVG 本地图标</el-button>
	<el-button>
		<el-icon>
			<i-ep-plus />
		</el-icon>
	</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loginApi } from '@/api/auth'

const login = async () => {
	const res = await loginApi({
		username: 'admin',
		password: '123456'
	})
	return res
}

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
