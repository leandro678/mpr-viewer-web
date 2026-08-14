# MPR Viewer Web

## Especificação Funcional MVP

Versão: 1.0

Autor: Leandro Boing

Data: Agosto 2026

---

## Objetivo

Desenvolver uma aplicação web para leitura e visualização de arquivos MPR.

A aplicação deverá permitir consultar informações técnicas de componentes sem necessidade de abrir o software CNC.

---
## Usuários

### Engenharia

Permissões:

- Upload de arquivos
- Consultar projetos
- Consultar operações

### PCP

Permissões:

- Consultar peças
- Consultar operações

### Produção

Permissões:

- Consultar informações da peça
- Visualizar operações

### Administrador

Permissões:

- Gerenciar usuários
- Gerenciar projetos
- Configurações gerais

## Fluxo Principal

1. Usuário acessa o sistema.
2. Realiza login.
3. Seleciona um arquivo MPR.
4. Sistema interpreta o arquivo.
5. Sistema extrai as informações.
6. Sistema apresenta os dados.
7. Usuário consulta operações.
8. Usuário visualiza desenho 2D.
9. Usuário visualiza modelo 3D.

## Informações Extraídas

### Dimensões

- Comprimento
- Largura
- Espessura

### Operações

- Furação Vertical
- Furação Horizontal
- Canal
- Rasgo
- Fresagem

### Estatísticas

- Quantidade de Furações
- Quantidade de Canais
- Quantidade de Rasgos
- Quantidade de Fresagens
- Total de Operações

## Tela Principal

Elementos da tela:

### Topo

- Logo
- Nome do sistema
- Usuário logado

### Menu lateral

- Upload MPR
- Projetos
- Configurações

### Área central

- Informações da peça
- Lista de operações
- Visualização 2D
- Visualização 3D

## Desenho da Tela Principal

+------------------------------------------------------+
|                    MPR VIEWER                        |
+------------------------------------------------------+

[ Selecionar Arquivo ]

+------------------+-----------------------------------+
| Operações        |       Visualização 3D             |
|                  |                                   |
| Furo 01          |                                   |
| Furo 02          |                                   |
| Canal 01         |                                   |
| Fresagem 01      |                                   |
+------------------+-----------------------------------+

Informações da Peça

Código: LATERAL_DIREITA_001

Largura: 600 mm

Comprimento: 400 mm

Espessura: 18 mm

Material: MDF Branco 18 mm

Visualização 2D

### Descrição da Tela

A tela principal será composta por quatro áreas principais:

1. Seleção do arquivo MPR.
2. Lista de operações identificadas no arquivo.
3. Área de visualização 3D da peça.
4. Área de informações da peça e visualização 2D.

### Comportamento Esperado

- O usuário seleciona um arquivo MPR.
- O sistema interpreta automaticamente o arquivo.
- As dimensões da peça são exibidas.
- As operações encontradas são listadas.
- O desenho 2D é gerado.
- O modelo 3D é exibido.
- Ao selecionar uma operação na lista, o sistema deverá destacar sua posição na visualização.

## Funcionalidades Obrigatórias

### MVP 1.0

- Upload de arquivo MPR
- Leitura do arquivo
- Identificação das dimensões
- Lista de operações
- Estatísticas da peça
- Visualização 2D

### MVP 2.0

- Visualização 3D
- Destaque de operações
- Filtros

### MVP 3.0

- Banco de dados
- Histórico de projetos
- Controle de usuários