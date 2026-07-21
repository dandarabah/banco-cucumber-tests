const {Given, When, Then, Before, After, setDefaultTimeout} = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');
const { realizarLogin } = require('./loginHelper');
const { getDriver, quitDriver } = require('./driver');

setDefaultTimeout(60000);

let driver;

Before(async function () {
    driver = await getDriver();
});

After(async function () {
    await quitDriver();
});

Given('que estou logado no sistema', async function () {
    await realizarLogin(driver, 'Lia.Rosa', '425133');
});

When('transferir o valor da conta origem para a conta destino', async function (dataTable) {
    const dados = dataTable.hashes()[0];
    const contaOrigem = dados.id_conta_origem.trim();
    const contaDestino = dados.id_conta_destino.trim();
    const valor = dados.valor.trim().replace(',', '.');

    const selectOrigem = await driver.findElement(By.id('conta-origem'));
    await driver.executeScript(
        `arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('change', { bubbles: true }));`,
        selectOrigem,
        contaOrigem
    );

    const selectDestino = await driver.findElement(By.id('conta-destino'));
    await driver.executeScript(
        `arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('change', { bubbles: true }));`,
        selectDestino,
        contaDestino
    );

    const inputValor = await driver.findElement(By.id('valor'));
    await inputValor.clear();
    await inputValor.sendKeys(valor);

    const botaoTransferir = await driver.findElement(By.xpath("//button[contains(., 'Transferir')]"));
    await botaoTransferir.click();
});

Then('a transferência deve ser realizada com sucesso', async function () {
    const start = Date.now();
    let encontrado = false;

    while (Date.now() - start < 30000) {
        try {
            const listaTransferencias = await driver.findElement(By.css('ul.collection'));
            const texto = await listaTransferencias.getText();
            if (texto.includes('De') && texto.includes('para') && texto.includes('R$')) {
                encontrado = true;
                break;
            }
        } catch (error) {
            // continua aguardando
        }

        await driver.sleep(1000);
    }

    assert.strictEqual(encontrado, true);
});

Then('devo visualizar a mensagem {string}', async function (mensagemEsperada) {
    const toast = await driver.wait(until.elementLocated(By.css('#toast-container .toast.red')), 30000);
    const texto = await toast.getText();
    assert.strictEqual(texto.trim(), mensagemEsperada);
});

Then('a transferência não deve ser realizada', async function () {
    const start = Date.now();
    let encontrado = false;
    let mensagem = '';

    while (Date.now() - start < 30000) {
        try {
            const toast = await driver.findElement(By.css('#toast-container .toast.red'));
            mensagem = await toast.getText();
            if (mensagem && mensagem.trim().length > 0) {
                encontrado = true;
                break;
            }
        } catch (error) {
            // continua aguardando
        }

        await driver.sleep(1000);
    }

    assert.strictEqual(encontrado, true, 'Aviso de erro não apareceu');
});