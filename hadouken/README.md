# Evitando o Código Hadouken 

## O que seria um Código Hadouken?

- É o caso em que há vários IFs aninhados, fazendo com que o código cresça horizontalmente. 
É imporante evitá-lo porque prejudica a legibilidade e a clareza do código. 

- Ilustrando o problema: 

![HADOUKEN!](https://user-images.githubusercontent.com/91624733/149679960-34c9d828-c342-4133-b1d2-7a7e474372cb.png)

## Proposta do Desafio

- Nesse módulo, foi criado um código hadouken no arquivo (codigo-hadouken.js) e reduzido 
no arquivo (solucao-hadouken.js) a quantidade de IFs para realizar a validação das informações em um
pequeno banco de dados. Este foi criado através do objeto 'Map'. 

## Como foi feito?

- Primeiro, foi importado o pacote 'readline' para solicitar as informações do usuário. Então,
criou-se um banco de dados com 2 pessoas já cadastrados por meio do objeto 'Map', usando o método 'set'. 
Depois disso, armazenou-se todas as informações solicitadas ('nome', 'idade', 'nacionalidade', 'estado',
'cidade', 'formacao') em um 'objeto' para que se pudesse comparar (através do JSON.stringify) com o 
'objeto' das pessoas no banco de dados. Em caso de igualdade, significa que o usuário já possui cadastro e
pode ser encontrado. Por fim, foi utilizado a técnica de recursão para 'loopar' o formulário caso o usuário
digite 'sim' ou 's' no final do código.

Obs.: As informações podem ser preenchidas com letras maiúsculas e/ou minúsculas (foi usado o 'toLowerCase').

- Ilustrando a tela do formulário:

![FORMULARIO!](https://user-images.githubusercontent.com/91624733/149681006-0655def3-dc5c-4af7-90fd-fb66791316fd.png)
