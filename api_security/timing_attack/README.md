# Protegendo o código de um possível 'timing attack'

Obs.: Para construção do sistema, foi utilizado o framework 'express' do Node.js e para fazer o hash das senhas, 
a biblioteca 'bcrypt'. Além disso, foi utilizado também o postgreSQL para armazenas os usuários e o postman para
observar e manipular as entradas e as saídas.

## O que seria um 'timing attack'?

- De forma breve, seria o modo como uma pessoa mal intencionada consegue identificar se um usuário existe ou não
dentro de um determinado banco de dados. Isso é possível por conta dos diferentes tempos de resposta que o servidor 
fornece ao usuário no momento de login.

As imagens abaixo exemplificam o que foi dito anteriormente.

Primeiro, no caso de um usuário válido com senha válida:

![USERPASSWORDVALIDPROBLEM!](https://user-images.githubusercontent.com/91624733/151889421-b07aa058-9df4-485e-bb5e-b1842ee60c6c.png)

Segundo, no caso de um usuário válido com senha inválida:

![USERVALIDPASSWORDINVALIDPROBLEM!](https://user-images.githubusercontent.com/91624733/151889570-e6066633-214d-482f-96d5-892133dfeb18.png)

Terceiro, no caso de um usuário inválido com senha inválida:

![USERPASSWORDINVALIDPROBLEM!](https://user-images.githubusercontent.com/91624733/151889684-7e81a0f1-0f93-40f1-b4ce-187562accdc5.png)

Isso acontece porque, no caso de um usuário válido, é necessário fazer o hash da senha, tornando o processo mais custoso.
Diferentemente do que acontece no caso de um usuário inválido, já que assim que se identifica a inexistência, pula-se a
etapa de construção da hash.

## Então, qual seria uma possível solução?

- A ideia pensada foi criar um hash de uma senha falsa. Como assim? No momento que o usuário não é identificado no sistema, ao invés de
mandar direto uma mensagem informando-o, cria-se um hash da senha digitada para que o tempo de resposta seja equivalente ao tempo de 
resposta de um usuário válido.

As imagens abaixo ilustram o que foi explicado.

Iniciando, no caso de um usuário válido com senha válida:

![USERPASSWORDVALIDSOLUTION!](https://user-images.githubusercontent.com/91624733/151889785-0aac6700-679c-44f8-9205-6e7d1ea3d532.png)

Continuando, no caso de um usuário válido com senha inválida:

![USERVALIDPASSWORDINVALIDSOLUTION!](https://user-images.githubusercontent.com/91624733/151889983-36bc9499-c8d7-4a14-8661-40ea1f3cddac.png)

Terminando, no caso de um usuário inválido com senha inválida:

![USERPASSWORDINVALIDSOLUTION!](https://user-images.githubusercontent.com/91624733/151890038-5160fb0e-3952-478c-8d56-7fd96181789e.png)