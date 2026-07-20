Feature: Login

    Scenario: Login com sucesso
        Given que esteja na página de login
        When realizo o login com as seguintes credenciais
            |usuario|<usuario>|
            |senha  |<senha>  |
        Then devo ser redirecionado para a página inicial
    
Example: 
    |usuario    |senha   |
    |Lia.Rosa   |425133  |
    |junior.lima|112233  |