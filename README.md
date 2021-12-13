# Movies-Review
## Como Rodar o Projeto em sua Máquina
Para rodar o projeto em sua máquina, siga os seguintes passos:
Para clonar o repositório em uma pasta de seu computador
```
git clone git@github.com:gbelther/movies-review.git
```
Entrando na pasta pelo terminal
```
cd movies-review
```
Instalando as dependências do projeto
```
yarn ou npm i
```
Rodando o servidor Json-Server
```
yarn server ou npm run server
```
Rodando o App
```
yarn start ou npm run start
```

## Bugs Conhecidos
- Todos os filmes estão com a mesma foto de capa
- Layout da listagem de filmes para quando a descrição é muito pequena

## Abordagem do Projeto
Este projeto foi desenvolvido aproveitando ao máximo o conceito de componentização presente no React, potencializado com o Styled-Components de forma a construir componentes desacoplados, sem muitas funcionalidades para não deixá-los muito complexos. Para simular uma API, foi utilizado também o Json-Server, que é uma biblioteca muito simples e poderosa, excelente para construir projetos sem um back-end. Ainda nesse aspecto de API, para as requisições foi construído uma instância do Axios, uma lib muito famosa e bastante usada quando é utilizado uma API Rest. Outro ponto importante foi a utilização do Typescript, que é um superset do Javascript, incluindo tipagem à linguagem, reduzindo bastante a probabilidade de aparecimento de erros e facilitando muito a manutenção do código, principalmente quando o Dev que for fazer esta manutenção for outro. Por fim, com o auxílio do React-router-dom, foi possível construir rotas de maneira simples e fácil para deixar o App mais escalável e organizado.

As tecnologias utilizadas, então, foram:
- React
- Typescript
- Styled-Components
- Json-server
- Axios
- React-router-dom
- React-spinners
- React-icons
- React-Modal

## Comentários sobre as funcionalidades mais difíceis
A maioria das funcionalidades do projeto eram demoradas de se fazer, porém não difíceis. A construção do layout acredito que seja a parte mais demorada do projeto, razão pela qual não foi possível desenvolver todas as funcionalidades desejadas neste intervalo de tempo de poucos dias. Não acredito que tenha alguma coisa difícil do que foi pedido.

## Se eu tivesse mais tempo...
O que eu faria de diferente se eu tivesse mais tempo, seria o tratamento melhor de erros em requisições, sempre retornando de uma forma mais amigável ao usuário os possíveis erros. Além disso, teria completado a parte de login, utilizado uma biblioteca de formulário como o react-hook-form juntamente com o Yup para validar melhor os campos, sempre pensando na experiência do usuário, teria colocado mais detalhes no layout do projeto e também desenvolvido a funcionalidade de comentar uma avaliação do usuário. Por fim, teria completado os testes automatizados.
