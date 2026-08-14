# Wireframes MVP

Projeto: MPR Viewer Web

Versão: 1.0

Objetivo:

Documentar todas as telas do sistema antes do desenvolvimento.

# Tela 01 – Login

+--------------------------------------------------+
|                  MPR VIEWER                      |
+--------------------------------------------------+

Usuário

[_____________________]

Senha

[_____________________]

[ Entrar ]

----------------------------------------------------

Esqueceu sua senha?

# Tela 02 – Principal

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

# Tela 03 – Upload MPR

+--------------------------------------------------+
|                Upload de Arquivo                 |
+--------------------------------------------------+

[ Escolher Arquivo ]

Arquivo:

LATERAL_DIREITA.MPR

[ Processar ]

----------------------------------------------------

Status:

Aguardando processamento.

# Tela 04 – Informações da Peça

+--------------------------------------------------+
|           Dados do Componente                    |
+--------------------------------------------------+

Código:

LATERAL_DIREITA_001

Material:

MDF Branco

Comprimento:

600 mm

Largura:

400 mm

Espessura:

18 mm

Quantidade de Operações:

37

# Tela 05 – Lista de Operações

+--------------------------------------------------+
|               Operações                           |
+--------------------------------------------------+

Tipo          X      Y      Z

Furo V       50     32      0

Furo V      150     32      0

Canal       200     40      9

Fresagem    500    120      5

# Fluxo de Navegação

Login

↓

Tela Principal

↓

Upload MPR

↓

Processamento

↓

Exibição da Peça

↓

Consulta das Operações

↓

Visualização 2D / 3D

# MVP

Versão 1

✅ Login

✅ Upload MPR

✅ Leitura de Dimensões

✅ Lista de Operações

✅ Informações da Peça

✅ Visualização 2D

❌ Banco de Dados

❌ Visualização 3D Avançada

❌ Histórico de Projetos