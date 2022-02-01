# Evitando um possível ataque de SQL Injection

## O que seria um SQL Injection?

- Brevemente falando, seria um ataque de um usuário mal intencionado ao banco de dados, em que ele se aproveita 
de um input sem higienização para escrever mais códigos e tentar descobrir os dados sensíveis que esse banco contém.

## Desafio

- A partir de um projeto pronto apresentado pelo mentor, o desafio foi validar o input do usuário para evitar que
ele digitasse, por exemplo, o 'id(número) or 1=1' para pegar não só o email específico como também todos os emails 
do banco de dados. A imagem abaixo ilustra melhor o problema:

![SQLINJECTIONPROBLEM!](https://user-images.githubusercontent.com/91624733/151900232-8c8a374c-eceb-4d1f-bd29-0b16b87da009.png)

## Solução

- Para solucionar, adicionou-se '$1' para permitir apenas um parâmetro e, posteriormente, colocou-se o 'id'. Isso faz gerar um erro ao usuário que tenta implementar mais códigos. 

Obs.: O código da solução se encontra no caminho 'domain\repository/user.js'.

Caso o usuário digite novamente o 'id or 1=1', o seguinte status será exibido:

![SQLINJECTIONSOLUTION!](https://user-images.githubusercontent.com/91624733/151900356-53837d19-bcc5-4702-80a5-25d1d700a369.png)

