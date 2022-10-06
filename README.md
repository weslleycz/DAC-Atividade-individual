## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [NPM](https://www.npmjs.com/) _(examples are with yarn)_

**Executando**

```bash
# Install the dependencies
$ npm install

# Start the app
$ npm start
```

### Questões
1. Instalar e configurar o Docker em seu computador. 
2. Execute e explique a execução dos seguintes comandos:</br>
a. docker container run tomcat:</br>
Ele cria um container com o Apache Tomcat um servidor web java.</br>
b. docker container ls:</br>
Lista os conteines que estão instalados no seu docker.</br>
c. docker image ls:</br>
Lista as imagens que estão instaladas no seu docker.</br>
3. Realize os seguintes passos:</br>
a. Criei uma aplicação java web e construa o artefato .war.</br>
b. Crie um arquivo Dockerfile. (deve ser inserido o arquivo criado no passo a)</br> 
c. Construa uma nova image (deve ser utilizado o arquivo Dockerfile do passo b)</br> 
d. Execute o comando: docker container run -p 3000:3000</br>
4. No arquivo README.md, inclua uma seção com um resumo das principais vantagens do uso de containers.</br>
Vantagens de usar containers:</br>
Maior portabilidade,economia de recursos,disponibilidade,ambientes similares,padronização e replicação.</br>
5. No arquivo README.md, inclua uma seção com as principais dificuldades que você enfrentou para concluir este roteiro.</br>
Eu fiquei com dúvida o que era .war na questão 3: a) depois eu descobrir que era um binário para o Java Web, como a professora permitiu utilizar outras linguagens eu criei uma api rest com typescript e express-tsx-views para construir as viws.