const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      { texto: "Isso é assustador!", afirmacao: "Você está cético em relação à nova tecnologia e sente receio." },
      { texto: "Isso é maravilhoso!", afirmacao: "Você está entusiasmado com as novas possibilidades oferecidas pela tecnologia." }
    ]
  },
  {
    enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      { texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", afirmacao: "Você utiliza a tecnologia para obter assistência, refletindo uma abordagem prática e moderna." },
      { texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.", afirmacao: "Você valoriza a pesquisa independente e a colaboração com colegas." }
    ]
  },
  {
    enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      { texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.", afirmacao: "Você vê a IA como uma ferramenta para criar novas oportunidades e aprimorar capacidades humanas." },
      { texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.", afirmacao: "Você está preocupado com o impacto da IA sobre os empregos e acredita na necessidade de proteger os trabalhadores." }
    ]
  },
  {
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      { texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.", afirmacao: "Você opta por utilizar ferramentas tradicionais de design para expressar suas ideias." },
      { texto: "Criar uma imagem utilizando um gerador de imagem de IA.", afirmacao: "Você escolhe usar uma tecnologia avançada para criar uma imagem, aproveitando as capacidades da IA." }
    ]
  },
  {
    enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      { texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.", afirmacao: "Você acredita que usar a tecnologia dessa forma é aceitável e não vê problema em repetir o conteúdo gerado." },
      { texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.", afirmacao: "Você valoriza a revisão e a contribuição pessoal para garantir a qualidade do trabalho." }
    ]
  },
];

let atual = 0;

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
  caixaAlternativas.innerHTML = "";
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  caixaResultado.textContent = opcaoSelecionada.afirmacao;
  atual++;
  setTimeout(mostraPergunta, 2000); // Espera 2 segundos antes de mostrar a próxima pergunta
}

function mostraResultado() {
  caixaPerguntas.textContent = "Obrigado por participar!";
  textoResultado.textContent = "Você completou o questionário.";
  caixaAlternativas.innerHTML = "";
}

// Iniciar o questionário
mostraPergunta();
