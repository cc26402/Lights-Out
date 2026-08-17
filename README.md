# 💡 Lights Out

Um jogo de raciocínio lógico desenvolvido em **HTML, CSS e JavaScript puro**, criado para apresentação no evento **Cotuca de Portas Abertas**.

## 🎮 Sobre o jogo

O objetivo do Lights Out é simples: **apague todas as luzes do tabuleiro**. O desafio é que, ao clicar em uma luz, ela e as luzes adjacentes (acima, abaixo, à esquerda e à direita) também mudam de estado — acesa vira apagada e vice-versa. Um bom quebra-cabeça de lógica para testar seu raciocínio!

## ✨ Funcionalidades

- **3 níveis de dificuldade**: Fácil (3x3), Médio (5x5) e Difícil (7x7)
- **Contador de jogadas**, para acompanhar quantos cliques foram necessários
- **Geração automática de tabuleiro**, embaralhado a partir de jogadas válidas (garantindo que todo tabuleiro tenha solução)
- **Tela de parabéns** ao vencer, exibindo o total de jogadas realizadas
- **Botão de reiniciar** o jogo atual sem trocar a dificuldade
- **Easter egg**: clique no título "Lights Out" no canto superior esquerdo para trocar a cor das luzes acesas (6 cores disponíveis em rotação)

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da página
- **CSS3** — estilização, com uso de variáveis CSS (`custom properties`) para adaptar dinamicamente o tamanho das luzes conforme a dificuldade
- **JavaScript** — toda a lógica do jogo (geração do tabuleiro, propagação dos cliques, verificação de vitória, sistema de cores)

## ▶️ Como jogar

1. Clone o repositório (ou baixe os arquivos manualmente):

```bash
git clone https://github.com/cc26402/Lights-Out.git
cd Lights-Out
```

2. Abra o arquivo `lights_out.html` em qualquer navegador — não é necessário nenhum servidor ou instalação adicional
3. Escolha uma dificuldade (Fácil, Médio ou Difícil)
4. Clique nas luzes para apagá-las todas e vencer o jogo!

## 📁 Estrutura do projeto

```
├── lights_out.html   # Estrutura da página
├── script.js          # Lógica do jogo
└── style.css          # Estilização e variáveis de tema
```

## 👤 Autor

Desenvolvido por **Miguel Jupy Rezende**, estudante de Análise e Desenvolvimento de Sistemas no Cotuca.
