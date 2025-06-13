# Boas vindas ao projeto Safe Flow Hub

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instalação e uso](#instalação-e-uso)

<h2>Sumário</h2>
<ul>
  <li><a href="#visao-geral">1 - Visão Geral</a></li>
  <li><a href="#entrada-demanda">2 - Entrada da Demanda - Hub</a></li>
  <li><a href="#descoberta">3 - Descoberta Avaliacao pelo Atendimento</a></li>
  <li><a href="#entregas-valor">4 - Quebrar em Entregas de Valor Projetos</a></li>
  <li><a href="#plano-atuacao">5 - Plano de Atuacao Projetos</a></li>
  <li><a href="#planejar-ciclos">6 - Planejar em Ciclos</a></li>
  <li><a href="#abrir-tarefas">7 - Abrir Tarefas do Ciclo</a></li>
  <li><a href="#planejamento-ciclo">8 - Planejamento de Ciclo</a></li>
  <li><a href="#detalhar-tarefas">9 - Detalhar em Tarefas</a></li>
  <li><a href="#desenvolvimento">10 - Desenvolvimento</a></li>
  <li><a href="#aceite-interno">11 - Aceite Interno Pronto Inconformidade</a></li>
  <li><a href="#empacotamento">12 - Empacotamento e Entrega</a></li>
  <li><a href="#consolidacao-ciclo">13 - Consolidacao do Ciclo Projetos</a></li>
  <li><a href="#decisao-entrega">14 - Decisao Ha Entrega</a></li>
  <li><a href="#decisao-encerrado">15 - Decisao Projeto Encerrado</a></li>
  <li><a href="#done">16 - Done</a></li>
  <li><a href="#cancelada">17 - Cancelada</a></li>
  <li><a href="#encerramento">18 - Encerramento Geral do Processo Konecty Orientado a Valor</a></li>
</ul>



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


## 1 - Visão Geral <a id="visao-geral"></a>

O fluxo começa com a Entrada da Demanda (Hub), segue para a Descoberta, onde o atendimento qualifica a solicitação como projeto, ticket ou a encerra se não se aplicar. Projetos são decompostos em Entregas Macro, recebendo um Plano de Atuação, depois passam por Planejamento em Ciclo, criação de tarefas e um Planejamento de Ciclo detalhado; tickets entram direto nessa fase. Com as tarefas definidas, ocorre o Desenvolvimento, seguido do Aceite Interno, que pode aprovar (✔) ou devolver (✖) o trabalho. Entregas aprovadas são Empacotadas para o cliente ou encaminhadas à Consolidação do Ciclo (projetos). Se houver entrega, retorna-se ao empacotamento; caso contrário, avalia-se se o Projeto está Encerrado — se sim, marca-se Done, se não, reinicia-se o planejamento. Demandas não aplicáveis ou abandonadas são marcadas como Canceladas.

# Funcionalidades:

O projeto contém 3 services: `auth`, `biling` e `orders` em comunicação através do rabbitmq

- **auth**: responsável por lidar com usuarios e autenticação
- **biling**: para lidar com pagamentos
- **orders**: para lidar com pedidos

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
