Feature: Login

    Scenario: Login com sucesso
        Given que esteja na página de login
        When realizo o login com as seguintes credenciais
            |usuario|Lia.Rosa|
            |senha  |425133  |
        Then devo ser redirecionado para a página inicial
    