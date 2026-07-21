const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let driver;

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
})

After(async function () {
    await driver.quit();
})

Given('que esteja na página de login', async function () {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:4000/');
});


When('realizo o login com as seguintes credenciais', async function (dataTable) {
    const data = dataTable.rowsHash();

    const usuario = data.usuario;
    const senha = data.senha;

    await driver.findElement(By.id('username')).sendKeys(usuario);
    await driver.findElement(By.id('senha')).sendKeys(senha);
    await driver.findElement(By.xpath("//button[text()='Entrar']")).click();
});

Then('devo ser redirecionado para a página inicial', async function () {

    await driver.sleep(3000);

    const url = await driver.getCurrentUrl();

    const textoPagina = await driver
        .findElement(By.tagName('body'))
        .getText();

    console.log('URL APÓS LOGIN:', url);
    console.log('CONTEÚDO DA PÁGINA:', textoPagina);

});

Then('devo visualizar a mensagem Erro no login. Tente novamente', async function () {

    const mensagem = await driver.wait(
        until.elementLocated(By.css('.toast')),
        10000
    );

    const texto = await mensagem.getText();

    assert.strictEqual(
        texto,
        'Erro no login. Tente novamente.'
    );
});

Then('não devo ser redirecionado para a página inicial', async function () {

    const url = await driver.getCurrentUrl();

    assert.notStrictEqual(
        url,
        'http://localhost:4000/home'
    );

});