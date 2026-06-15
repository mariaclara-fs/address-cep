# Address CEP

Projeto desenvolvido em React para a disciplina de Programação para Web II.

## Sobre o projeto

A aplicação consiste em um formulário de cadastro de endereço que realiza a busca automática de informações a partir do CEP informado pelo usuário.

Quando um CEP válido é digitado, a aplicação faz uma requisição para a API do ViaCEP e preenche automaticamente os campos de endereço.

## Funcionalidades

- Consulta de endereço a partir do CEP
- Preenchimento automático dos campos:
  - Rua
  - Bairro
  - Cidade
  - Estado
- Campo para informar número do endereço
- Validação de CEP inválido
- Mensagem de erro caso o CEP não seja encontrado

## Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- API ViaCEP

## API utilizada

Consulta de CEP feita através da API pública do ViaCEP:

https://viacep.com.br/

## Como executar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## Deploy

O projeto foi publicado utilizando Github Pages.