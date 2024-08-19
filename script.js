const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como as crenças religiosas podem influenciar as políticas de controle populacional, especialmente em casos de estupro, e qual é o impacto disso na superpopulação?
",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "As crenças religiosas que proíbem o aborto e o uso de contraceptivos podem dificultar o controle populacional, contribuindo para a superpopulação."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Algumas religiões encorajam grandes famílias, o que pode agravar o problema da superpopulação, mesmo em casos de gravidez por estupro."
            }
        ]
    },
    {
         alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Certas crenças religiosas defendem o valor da vida desde a concepção, independentemente das circunstâncias, o que pode levar a um aumento da população."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "No entanto, há correntes religiosas que apoiam a educação sexual e o uso de métodos contraceptivos para evitar a superpopulação."
            }
        ]
    },
    {
          texto: "Isso é maravilhoso!",
                afirmacao: " Algumas religiões podem promover a ideia de que as vítimas de estupro têm o direito de decidir sobre o aborto, ajudando a controlar a população."
            }
        ]
    },
    {
        enunciado: "Como a moralidade religiosa pode afetar a percepção da sociedade sobre o aborto em casos de estupro, e qual seria o impacto disso na superpopulação?: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: " A moralidade religiosa pode condenar o aborto em todas as circunstâncias, incluindo em casos de estupro, o que pode levar a um aumento populacional."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: " Algumas religiões oferecem apoio às vítimas de estupro, defendendo o direito ao aborto, o que pode ajudar a controlar a população."
            }
        ]
    },
    {
         {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "A condenação religiosa ao aborto pode levar a um aumento de nascimentos indesejados, exacerbando a superpopulação."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: " Em contrapartida, certas religiões promovem a adoção como uma alternativa ao aborto, ajudando a gerir o crescimento populacional."
            }
        ]
    },
    {
           texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: " A influência religiosa pode levar à criação de leis que restringem o aborto, contribuindo para a superpopulação.
"
            }
        ]
    },
    {
        enunciado: "De que maneira a superpopulação e as restrições religiosas ao aborto em casos de estupro podem estar interconectadas, e quais são as possíveis soluções éticas para esse dilema?: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: " A superpopulação pode ser exacerbada pelas restrições religiosas ao aborto, especialmente em casos de gravidez por estupro."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Algumas religiões defendem a vida em qualquer circunstância, contribuindo para a superpopulação, mas também promovem outras formas de controle populacional."
            }
        ]
    },
    {
        {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "As restrições ao aborto por razões religiosas podem levar a um crescimento populacional descontrolado, especialmente em contextos de violência sexual."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Existem correntes religiosas que, apesar de serem contra o aborto, promovem a educação sexual e o planejamento familiar como formas de controlar a população."
            }
        ]
    },
    {
        {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: " A superpopulação pode ser controlada por políticas que conciliem princípios religiosos com soluções éticas, como o apoio à adoção ou ao planejamento familiar."
            }
        ]
    },
    {
      

      

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
