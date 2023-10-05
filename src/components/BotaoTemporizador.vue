<template>
    <button class="button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: "BotaoTemporizador",
    emits: ['clicado'],
    props: {
        texto: {
            type: String,
            default: ''
        },
        icone: {
            type: String,
            default: ''
        },
        desabilitado: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        clicado(){
            this.$emit("clicado")
        }
    }
})
</script>

<style>

</style>