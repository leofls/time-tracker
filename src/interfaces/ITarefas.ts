import IProjeto from "./IProjeto";

export default interface ITarefas {
    id: string
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto,
}