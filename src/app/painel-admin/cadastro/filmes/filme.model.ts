export class Filme {
  id: number
  nome: string
  genero: string
  ano: string
  diretor: string
  descricao: string
  poster: Array<object>
  constructor(id, nome, genero, ano, diretor, descricao, poster) {
    this.id = id,
      this.nome = nome,
      this.genero = genero,
      this.ano = ano,
      this.diretor = diretor,
      this.descricao = descricao,
      this.poster = poster
  }
}
