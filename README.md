# Boas vindas ao projeto Safe Flow Hub

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instalação e uso](#instalação-e-uso)


#  Apresentação do projeto
O projeto Safe Flow Hub é uma aplicação backend que gerencia pagamentos de usuários dentro de um sistema utilizando arquitetura de microservices, além de rabbitmq, nest.js, aws, docker, mongodb.

O projeto está em fase de implementação de **kubernetes**

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

# Funcionalidades:

O projeto contém 3 services: `auth`, `biling` e `orders` em comunicação através do rabbitmq

- auth: responsável por lidar com usuarios e autenticação
- biling: para lidar com pagamentos
- orders: para lidar com pedidos

```  
Obs: o arquivo  `Safe Flow.postman_collection` presente na raiz do projeto contém os exemplos das requisições do projeto
```


# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- git version v2.34.1  
- docker v25.0.1

```
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  

[Download Docker](https://docs.docker.com/engine/install/) 
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone https://github.com/TiagoEmanuel8/safe-flow-hub.git
  
```  
  
Entre na pasta  
  
```  
cd safe-flow-hub
  
```

Crie um arquivo *.env* nos services `apps/auth`, `apps/biling`, `apps/orders`
```  
Obs: procure pela pasta `env.template` onde já existem exemplo das variáveis de ambiente existente no projeto 
```


### Dentro da pasta raiz do projeto, execute o comando abaixo para iniciar o docker  
  
```  
docker-compose up
```  

### Caso queira parar a execução do docker use o comando
  
```  
docker-compose down
```  

---
