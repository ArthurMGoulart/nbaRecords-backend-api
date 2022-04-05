# NBA RECORDS API
https://nbarecords-back-end.herokuapp.com/ disponibiliza uma API REST que permite o acesso aos usuários e seus jogadores do aplicativo nbaRecords.

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |

## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `405` | Método não implementado.|
| `410` | Registro pesquisado foi apagado do sistema e não esta mais disponível.|
| `422` | Dados informados estão fora do escopo definido para o campo.|

## Entry Points
Requisições para a API devem seguir os padrões:
| Método | Path | Descrição |
|---|---|
| `POST` | `/signup` | Faz o registro de um novo usuário, retornando seu token da sessão. |
| `POST` | `/login` | Faz a conexão com o usuário com correspondente email e senha, retornando seu token da sessão. |
| `POST` | `/user/:id` | Faz a associação do usuário com o Jogador que possue o id passado no parâmetro da url. |
| `GET` | `/user/players` | Retorna os Jogadores associados ao usuário da sessão. |
| `GET` | `/nba` | Retorna todos os Jogadores da NBA. |
| `GET` | `/nba/:id` | Retorna o Jogadores que possue o id passado no parâmetro da url.. |

### Utilizando  [POST/signup]

#### Dados para envio no [POST/signup]
| Parâmetro | Validação | Descrição |
|---|---|
| `name` | String, min 3 char, max 30 char | `Nome do novo usuário` |
| `password` | String, min 6 char | `Senha do novo usuário` |

+ Request (application/json)

    + Body

            {
                "name": "novoUsuario",
                "password": "123456",
            }
            
+ Response 201 (application/json)

    + Body

            {
                "token": "[access_token]",
            }

### Utilizando  [POST/login]

#### Dados para envio no [POST/signup]
| Parâmetro | Validação | Descrição |
|---|---|
| `name` | String, min 3 char, max 30 char | `Nome do usuário` |
| `password` | String, min 6 char | `Senha do usuário` |

+ Request (application/json)

    + Body

            {
                "name": "novoUsuario",
                "password": "123456",
            }
            
+ Response 200 (application/json)

    + Body

            {
                "token": "[token_da_sessão]",
            }
            
            ### Utilizando  [POST/login]

#### Dados para envio no [POST/user/:id]
| Parâmetro | Descrição |
|---|---|
| `token` `Token da Sessão` |

+ Request (application/json)

    + Headers

            Authorization: [token_da_sessão]
            
+ Response 200 (application/json)

    + Body

            {
                Associated!
            }
