@transferencia
Feature: Transferencia

Scenario Outline: Transferencia de valores válidos
    Given que estou logado no sistema
    When transferir o valor da conta origem para a conta destino 
    |id_conta_origem   | id_conta_destino   | valor   |
    |<id_conta_origem> | <id_conta_destino> | <valor> |
    Then a transferência deve ser realizada com sucesso

Examples:
    | id_conta_origem | id_conta_destino | valor |
    | 3               | 1                | 100.00|

Scenario Outline: Transferencia com saldo insuficiente
   Given que estou logado no sistema
    When transferir o valor da conta origem para a conta destino 
    |id_conta_origem   | id_conta_destino   | valor   |
    |<id_conta_origem> | <id_conta_destino> | <valor> |
    And devo visualizar a mensagem 'Saldo insuficiente para realizar a transferência.'
    Then a transferência não deve ser realizada

Examples:
    | id_conta_origem | id_conta_destino | valor |
    | 3               | 1                | 500001|
