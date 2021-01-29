export class Filme {
  id: number
  nome: string
  genero: string
  ano: string
  diretor: string
  descricao: string
  poster: Array<object>
  constructor(nome, genero, ano, diretor, descricao, poster) {
    this.nome = nome,
      this.genero = genero,
      this.ano = ano,
      this.diretor = diretor,
      this.descricao = descricao,
      this.poster = poster
  }
}
