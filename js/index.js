const botaoAtualizarConselhos = document.querySelector(".botao");
const idCartao = document.querySelector(".titulo-cartao");
const descricaoConselho = document.querySelector(".conselho");

// //FUNÇAO PARA OBTER CONSELHOS DE UMA API:
async function obterConselhos() {
    try {
        const resposta = await fetch ("https://api.adviceslip.com/advice");

        if (!resposta.ok) {
            throw new Error("Erro ao tentar buscar informações da API.")
        }

        const conteudoDoConselho = await resposta.json();
        // console.log(conteudoDoConselho);

        const idConselho = `Conselho #${conteudoDoConselho.slip.id}`;
        const textoDoConselho = `${conteudoDoConselho.slip.advice}`;

        // console.log (textoDoConselho);
        // console.log ( idConselho);

        idCartao.innerText = idConselho;
        descricaoConselho.innerText = textoDoConselho;

    } catch (error) {
        console.error("Erro ao tentar buscar informações da API", error);
    }
    
}

botaoAtualizarConselhos.addEventListener("click", obterConselhos);

obterConselhos();