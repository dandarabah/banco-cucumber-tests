@login
Feature: Login

    Scenario Outline: Login com sucesso
        Given que esteja na página de login
        When realizo o login com as seguintes credenciais
            |usuario|<usuario>|
            |senha  |<senha>  |
        Then devo ser redirecionado para a página inicial
    Examples:
        |usuario    |senha   |
        |Lia.Rosa   |425133  |
        |junior.lima|112233  |


  Scenario Outline: Login invalido
        Given que esteja na página de login
        When realizo o login com as seguintes credenciais
            |usuario|<usuario>|
            |senha  |<senha>  |
        And devo visualizar a mensagem Erro no login. Tente novamente
        Then não devo ser redirecionado para a página inicial
    Examples:
        |usuario      |senha   |
        |cloe.ferreira|812345  |
        