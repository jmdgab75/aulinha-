class Noticia{
  constructor (titulo, publicação, resumo, texto) {
    this.titulo = titulo;
    this.publicação =publicação;
    this.resumo = resumo;
    this.texto = texto;
  }
  
mostrarNoticia(){
    return this.titulo +"\n"+ this.publicação +"\n"+ this.resumo +"\n"+ this.texto

  }
}

class Destaque extends Noticia{
  constructor(imagem, titulo, publicação, resumo, texto){
   super(titulo, publicação, resumo, texto);
    this.imagem = imagem;
  }

mostrarDestaque(){
 return this.imagem + "\n" + this.titulo + "\n" + this.publicação + "\n" + this.resumo + "\n\n" + this.texto
}
}

let destaque = new Destaque("https://www.google.com/url?sa=i&url=https%3A%2F%2Fg1.globo.com%2Fsaude%2Fcoronavirus%2Fnoticia%2F2022%2F03%2F29%2Fbrasil-tem-282-mortes-por-covid-19-em-24-horas-e-chega-ao-total-de-659294.ghtml&psig=AOvVaw0jAKUBQavNU3cwS_KC-w-w&ust=1649947208849000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIjvwtqikfcCFQAAAAAdAAAAABAD", "Brasil tem 282 mortes por Covid-19 em 24 horas e chega ao total de 659.294", "29/03/2022", "São 29.8881.977 casos registrados do novo coronavírus desde o início da pandemia, segundo dados reunidos pelo consórcio de veículos de imprensa. Média móvel de mortes está em 217.", "O Brasil registrou nesta terça-feira (29) 282 mortes pela Covid-19 nas últimas 24 horas, totalizando 659.294 desde o início da pandemia. Com isso, a média móvel de mortes nos últimos 7 dias é de 217, a mais baixa desde 19 de janeiro de 2021. Em comparação à média de 14 dias atrás, a variação foi de -37%, marcando o 33º dia seguido de tendência de queda nos óbitos decorrentes da doença.")
  console.log(destaque.mostrarDestaque())



