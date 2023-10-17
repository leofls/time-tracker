<template>
  <div class="notificacoes">
    <article v-for="notificacao in notificacoes" :key="notificacao.id" 
        :id="`notificacao-${notificacao.id}`"
        class="message"
        :class="contexto[notificacao.tipo]"
    >
        <div class="message-header">
          <p> {{ notificacao.titulo }} </p>
          <button class="delete" aria-label="delete" @click="hideMessage(notificacao.id)"></button>
        </div>
        <div class="message-body">
            {{ notificacao.texto }}
        </div>
    </article>
    
  </div>
</template>

<script>
import { TipoNotificacao } from '@/interfaces/INotificacao'
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: "Notificacoes",
    data(){
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger',
            }
        }
    },
    methods: {
        hideMessage(id) {
            let notificacao = document.querySelector(`#notificacao-${id}`)
            notificacao.classList.add('is-hidden')
        }
    },
    setup(){
        const store = useStore()

        return {
            notificacoes: computed(() => store.state.notificacoes),
            store
        }
    }
})

</script>

<style scoped>
    .notificacoes {
        position: absolute;
        right: 0;
        width: 300px;
        padding: 8px;
        z-index: 2;
    }
</style>