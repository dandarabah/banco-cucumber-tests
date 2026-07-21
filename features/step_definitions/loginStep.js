const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');
const { realizarLogin } = require('./loginHelper');
const { getDriver, quitDriver } = require('./driver');

let driver;

Before(async function () {
    driver = await getDriver();

})

After(async function () {
    await quitDriver();
})

Given('que esteja na página de login', async function () {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:4000/');
});

When('realizo o login com as seguintes credenciais', async function (dataTable) {
    const data = dataTable.rowsHash();
    const usuario = data.usuario;
    const senha = data.senha;

    await realizarLogin(driver, usuario, senha);
});


Then('devo ser redirecionado para a página inicial', async function () {
    const titulo = await driver.wait(until.elementLocated(By.xpath("//h4[contains(., 'Realizar Transferência')]")), 10000);
    const texto = await titulo.getText();

    assert.strictEqual(texto.includes('Realizar Transferência'), true);
});

Then('devo visualizar a mensagem Erro no login. Tente novamente', async function () {

    const mensagem = await driver.wait(
        until.elementLocated(By.css('#toast-container .toast')),
        10000
    );

    const texto = await mensagem.getText();

    assert.strictEqual(
        texto.trim(),
        'Erro no login. Tente novamente.'
    );
});

Then('não devo ser redirecionado para a página inicial', async function () {
    const bodyText = await driver.findElement(By.css('body')).getText();
    assert.strictEqual(bodyText.includes('Realizar Transferência'), false);
});