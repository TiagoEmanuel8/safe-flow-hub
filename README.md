# Boas vindas ao projeto Safe Flow Hub

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instalação e uso](#instalação-e-uso)


#  Apresentação do projeto
O projeto Safe Flow Hub é uma aplicação backend que gerencia pagamentos de usuários dentro de um sistema utilizando arquitetura de microservices, além de rabbitmq, nest.js, aws, docker, mongodb.

Atualmente estou desenvolvendo o projeto, estou implementando a comunicação entre os services dessa aplicação

# Tecnologias:
<div>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=gray" />
  </a>
  <a href="https://docs.npmjs.com/">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=gray" />
  </a>
  <a href="https://nestjs.com/">
    <img src="https://img.shields.io/badge/nest-339933?style=for-the-badge&logo=nestjs&color=gray" /> 
  </a>
  <a href="https://www.mongodb.com/pt-br">
    <img src="https://img.shields.io/badge/mongodb-339933?style=for-the-badge&logo=mongodb&color=gray" />
  </a>
  <a href="https://mongoosejs.com/">
    <img src="https://img.shields.io/badge/mongoose-339933?style=for-the-badge&logo=mongoose&color=gray" />
  </a>
  <a href="https://rabbitmq.com/">
    <img src="https://img.shields.io/badge/rabbitmq-339933?style=for-the-badge&logo=rabbitmq&color=gray" />
  </a>
  <a href="https://microservices.io/">
    <img src="https://img.shields.io/badge/microservices-339933?style=for-the-badge&logo=microservices&color=gray" />
  </a>
  <a href="https://aws.amazon.com/pt/">
    <img src="https://img.shields.io/badge/aws-339933?style=for-the-badge&logo=aws&color=gray"/>
  </a>
  <a href="https://www.npmjs.com/package/dotenv">
    <img src="https://img.shields.io/badge/dotenv-339933?style=for-the-badge&logo=dotenv&color=gray"/>
  </a>
   <a href="https://git-scm.com/">
    <img src="https://img.shields.io/badge/git-339933?style=for-the-badge&logo=git&color=gray" />
  </a>
   <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-339933?style=for-the-badge&logo=docker&color=gray" />
    </a>
</div>

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone https://github.com/TiagoEmanuel8/safe-flow-hub.git
  
```  
  
Entre na pasta  
  
```  
cd safe-flow-hub
  
```

Crie um arquivo *.env* na raiz do projeto e preencha com os valores 
```  
Obs: na raiz do projeto existe um modelo pré pronto contendo nomes das variáveis de ambiente necessárias para o projeto funcionar corretamente
```

### Executando o projeto com **docker**

<details>

<summary>Clique para exibir os detalhes</summary>


### Execute o comando abaixo para iniciar o docker  
  
```  
docker-compose up -d
```  
### Execute o projeto  
  use o comando:
```  
npm start  
```  
ou
```  
npm run start:dev  
```  

### Caso queira parar a execução do docker use o comando
  
```  
docker-compose down --rmi local --volumes --remove-orphans
```  

</details>

### Executando o projeto **localmente**

<details>

<summary>Clique para exibir os detalhes</summary>
  
### Instale as dependências  
  
```  
npm install  
```  
### Execute o projeto  
  
```  
npm start  
```  
ou
``` 
npm run start:dev  
``` 
</details>

---
