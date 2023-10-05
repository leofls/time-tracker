<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        
        <BotaoTemporizador texto="Play" @clicado="iniciar" icone="fas fa-play" :desabilitado="cronometroRodando"/>
        <BotaoTemporizador texto="Stop" @clicado="finalizar" icone="fas fa-stop" :desabilitado="!cronometroRodando"/>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BotaoTemporizador from './BotaoTemporizador.vue'
import Cronometro from './Cronometro.vue'


export default defineComponent ({
    name: "Temporizador",
    emits:[
        'aoTemposizadorFinalizado'
    ],
    components: {
        Cronometro,
        BotaoTemporizador
    },
    data(){
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,

        }
    },
    
    methods: {
        iniciar(){
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos +=1
            }, 1000)
        }, 
        finalizar(){
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemposizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>

<style>

</style>