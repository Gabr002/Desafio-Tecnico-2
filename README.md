# Projeto de Autenticação de Usuários

## Visão Geral

Este projeto é uma API RESTful para autenticação de usuários, com operações de cadastro, autenticação e recuperação de informações do usuário. Utiliza Node.js, Express e MySQL para persistência de dados.

## Funcionalidades

1. **Cadastro de Usuário (`/api/auth/signup`):**
   - Permite o cadastro de novos usuários com nome, e-mail, senha e informações de telefone.
   - Retorna um token JWT no caso de sucesso.
   - Trata erros, incluindo e-mail já cadastrado.

2. **Autenticação (`/api/auth/signin`):**
   - Permite que usuários autentiquem-se usando e-mail e senha.
   - Retorna um token JWT no caso de sucesso.
   - Trata erros, incluindo e-mail não cadastrado ou senha incorreta.

3. **Buscar Usuário (`/api/auth/user`):**
   - Requer autenticação através de um token JWT.
   - Retorna informações do usuário autenticado.
   - Trata erros, incluindo token inválido ou expirado.

# Configuração do Projeto

## 1. **Instalação de Dependências:**
    npm install
    Configuração do Banco de Dados:

## 2. **Certifique-se de ter o XAMPP instalado e o MySQL em execução.**
      Execute o script para criar o banco de dados e a tabela:
      bash
      Copy code
      npm run create-database
      Configuração de Variáveis de Ambiente:

## 3. **Crie um arquivo .env na raiz do projeto e adicione:**
   makefile
   Copy code
   PORT=3000
   JWT_SECRET=
## 4. **Execução do Projeto:**

    bash
    Copy code
    npm start

## 5. **Tecnologias Utilizadas**

   Node.js
   Express.js
   MySQL
   JWT (JSON Web Tokens)
   Bcrypt.js
   Dotenv
   Contribuição
   Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.

## Licença

Este projeto está licenciado sob a Licença MIT.
