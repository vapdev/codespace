<template>
	<div class="flex justify-center">
		<div class="bg-subtle rounded-lg shadow-md p-6 w-80 h-fit flex flex-col items-start mt-20">
			<h2 class="text-center text-2xl font-bold mb-6">Login</h2>
			<label class="block mb-2" for="usuario">Email:</label>
			<input v-model="email" class="input input-bordered px-3 py-2 mb-4 w-full" type="text" id="usuario"
				name="usuario">
			<label class="block mb-2" for="senha">Senha:</label>
			<input v-model="senha" class="input input-bordered px-3 py-2 mb-4 w-full"
				:type="mostrarSenha ? 'text' : 'password'" id="senha" name="senha">
			<div class="flex mb-4">
				<input v-model="mostrarSenha" class="mr-2" type="checkbox">
				<span>Mostrar senha</span>
			</div>
			<button @click="login" class="btn w-full">Entrar</button>
			<div class="text-sm mt-4">
				Clique <span class="underline cursor-pointer">aqui</span>
				para se
				registrar.
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import http from '@/services/http.js';
import { useAuth } from '../stores/auth.js';

const emit = defineEmits(['showToast'])
const email = ref('')
const senha = ref('')
const mostrarSenha = ref(false)
const router = useRouter()
const auth = useAuth()

async function login () {
	let response;
	try {
		response = await http.post('/api/login', 
			JSON.stringify({
				email: email.value,
				password: senha.value
			})
		);
	} catch (error) {
		console.log(error);
		return;
	}
	const data = response.data;
	if (data.access_token) {
		auth.setToken(data.access_token);
		router.push({ name: 'home' });
	}
};

</script>