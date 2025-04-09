# Torneio de Futebol (TypeScript) 🏆

Simula um torneio de futebol com registro de times, partidas, classificação final e tratamento de erros com logs.

## Tecnologias

- Node.js + TypeScript
- Winston para logging
- Docker (opcional)

## Executando Localmente

```bash
npm install
npm start
```

## Executando dom Docker

```bash
docker build -t torneio-futebol-ts .
docker run torneio-futebol-ts
```

## Log de erros

Todos os erros são salvos no arquivo `erros.log` na raiz do projeto.
