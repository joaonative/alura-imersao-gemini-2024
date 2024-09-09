# FUT Finder - Ultimate Team Card Search
## Descrição

**FUT Finder** é um projeto direcionado aos fãs de futebol e inspirado no jogo **EA Sports FC 25**. A aplicação permite que os usuários pesquisem e visualizem diferentes cartas de jogadores do modo **Ultimate Team**, proporcionando uma experiência interativa e imersiva.

O design da aplicação foi inspirado na identidade visual da **EA Sports**, buscando oferecer uma interface familiar e intuitiva para os entusiastas do jogo. Além disso, o site é totalmente responsivo, garantindo uma excelente experiência de uso em qualquer dispositivo, desde smartphones até desktops.

## Funcionalidades

- **Busca por cartas de jogadores**: Filtre os atletas com base em atributos como posição, rating e estatísticas.
- **Visualização detalhada**: Veja informações completas sobre os jogadores, incluindo nome, clube, posição e habilidades.
- **Totalmente responsivo**: Interface adaptada para diferentes tamanhos de tela, incluindo dispositivos móveis e tablets.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Experiência do Usuário

O design foi cuidadosamente planejado para ser visualmente agradável e funcional, inspirado no layout do próprio jogo **EA Sports FC 25**, oferecendo uma experiência intuitiva e envolvente.

## Como Acessar

Você pode conferir o resultado final da aplicação através do seguinte link:  
[FUT Finder - Ultimate Team Card Search](https://joaonative.github.io/alura-imersao-gemini-2024/)

Se gostou do projeto, sinta-se à vontade para explorar e compartilhar suas sugestões!

---

## Processo de Desenvolvimento

### Ideia Inicial

Desde o início, eu queria desenvolver um projeto relacionado ao esporte, mas não queria seguir a mesma direção do projeto proposto nas aulas (textos com informações sobre atletas). Como sou fã do jogo **EA Sports FC**, logo decidi desenvolver algo relacionado ao jogo.

### Desenvolvimento da Ideia

Inicialmente, pensei em apresentar táticas, como formações e instruções de jogadores (conteúdo presente no jogo). Porém, percebi que isso poderia não ser tão claro para pessoas que não fazem parte dessa comunidade. Assim, optei por algo mais simples: exibir cartas de atletas do modo **Ultimate Team**, onde cada jogador tem estatísticas numéricas que determinam seu desempenho no jogo.

### Inspirações

Busquei inspirações em diversos sites. O site **Futbin** ([https://www.futbin.com/](https://www.futbin.com/)), especializado no modo **Ultimate Team**, me chamou a atenção pela maneira como os atletas são apresentados, em formato de cartas, assim como no jogo. Também explorei o site oficial da **EA Sports** ([https://www.ea.com/pt-br/games/ea-sports-fc/fc-24](https://www.ea.com/pt-br/games/ea-sports-fc/fc-24)) e me inspirei no esquema de cores e layout. Além disso, abri o próprio jogo para observar detalhes como fontes, botões e inputs, para recriar uma interface visualmente semelhante.

---

## Funcionamento Técnico

### Exibição de Cartas

Para exibir cada carta na tela, utilizei um container principal com o fundo correspondente ao tipo da carta (ouro, ícone, herói).  
![Cartas](https://i.postimg.cc/PqwR4dBY/cards.png "cartas")

Sobre esse container, coloquei outro com a imagem de fundo do jogador:  
![Atletas](https://i.postimg.cc/Ghzw8hCp/Screenshot-2024-09-06-140424.png "atletas")

Cada jogador possui uma imagem PNG (transparente) que eu mesmo recortei e importei para o projeto.

### Busca

Na aba de busca, o usuário pode digitar qualquer parte do nome completo do jogador. O código JavaScript detecta um evento no formulário e, ao ser submetido, filtra a lista de dados, retornando os resultados que correspondem ao termo pesquisado. Ao clicar no botão "Ver Todos", o JavaScript recarrega a lista completa, exibindo todos os jogadores. Já os botões "Geral +" e "Geral -" adicionam uma condição de ordenação antes da busca, organizando os jogadores por ordem crescente ou decrescente de rating.
![Formulário](https://i.postimg.cc/kg4rx3Jv/Screenshot-2024-09-06-140706.png "formulário de busca")

---

## Uso do Google Gemini

O **Google Gemini** foi fundamental no desenvolvimento do projeto. Através do modelo de inteligência artificial, foram gerados os dados das listas de jogadores. Além disso, utilizei a ferramenta para implementar diversas funcionalidades, ajustando o código conforme necessário para atender às necessidades do projeto.
