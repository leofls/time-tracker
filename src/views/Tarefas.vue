<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa"/>
        <Box v-if="listaEstaVazia">
        Você não está muto produtivo hoje :(
        </Box>
    </div>
     
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import Formulario from '@/components/Formulario.vue';
  import Tarefa from '@/components/Tarefa.vue';
  import ITarefa from '@/interfaces/ITarefas';
  import Box from '@/components/Box.vue';
  import { useStore } from "@/store";
  import { ADICIONAR_TAREFA } from '@/store/tipo-mutacoes';
  
  export default defineComponent ({
    name: "App",
    components: {
      Formulario,
      Tarefa,
      Box,
    },
    data(){
      return {
        //tarefas : [] as ITarefa[],
        modoEscuroAtivo: false,
      }
    },
    computed: {
      listaEstaVazia() : boolean {
        return this.tarefas.length === 0
      }
    },
    methods:{
      salvarTarefa (tarefa: ITarefa){
        this.store.commit(ADICIONAR_TAREFA, tarefa)
      },
      
    },
    setup() {
      const store = useStore();
      return {
        tarefas: computed(() => store.state.tarefas),
        store
      };
    },  
  })
</script>
  
<style>

</style>
  