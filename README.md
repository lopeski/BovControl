# BovControl

Essa é a minha reposta do desafio proposto de controle de animais (intituladas vaquinhas durante todo o codigo)
## O que foi usado?
- Nodejs 12
- Express
- Mongoose
- Mongodb
## Como Executar
Apos baixar o projeto rode os seguinte comandos para certificar que as dependencias foram devidamentes instaladas
```
npm install
```
ou
```
yarn install
```
E para executar use esse comando dentro da pasta do projeto
```
node src/index.js
```

## Como testar o codigo
Usando o insomnia eu testei da seguinte forma:
- put:
  - Cria uma vaquinha
- post:
  - Com a id na url ou no json, atualiza a vaquinha
- delete:
  - Com a id na url ou no json, deleta a vaquinha
- get:
   - Retorna todas as vaquinhas do db vaquinha

## Consideração finais
O centro do codigo pode ser encontrado no src/rotas/vacas.js. Já o modelo do banco de dados pode ser encontrado em src/database/vacamodel.js
