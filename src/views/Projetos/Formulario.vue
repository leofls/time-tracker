<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button type="submit" class="button">Salvar</button>
      </div>
    </form>

    
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO, NOTIFICAR } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  mounted() {
    if(this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      console.log(projeto);
      
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      
      this.nomeDoProjeto = "";
      this.store.commit(NOTIFICAR, {
        titulo: "Novo projeto foi salvo",
        texto: 'Pronto, seu projeto já está disponivel.',
        tipo: TipoNotificacao.SUCESSO 
      })
      this.$router.push('/projetos')
    },
  },
  setup() {
    const store = useStore();
    return {
      store
    };
  },
});
</script>

<style scoped>

</style>
