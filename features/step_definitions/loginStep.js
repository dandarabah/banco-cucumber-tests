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

<<<<<<< HEAD

=======
>>>>>>> transferencias
When('realizo o login com as seguintes credenciais', async function (dataTable) {
    const data = dataTable.rowsHash();
    const usuario = data.usuario;
    const senha = data.senha;

<<<<<<< HEAD
    await driver.findElement(By.id('username')).sendKeys(usuario);
    await driver.findElement(By.id('senha')).sendKeys(senha);
    await driver.findElement(By.xpath("//button[text()='Entrar']")).click();
=======
    await realizarLogin(driver, usuario, senha);
>>>>>>> transferencias
});

Then('devo ser redirecionado para a página inicial', async function () {
<<<<<<< HEAD

    await driver.sleep(3000);

    const url = await driver.getCurrentUrl();

    const textoPagina = await driver
        .findElement(By.tagName('body'))
        .getText();

    console.log('URL APÓS LOGIN:', url);
    console.log('CONTEÚDO DA PÁGINA:', textoPagina);

=======
    const titulo = await driver.wait(until.elementLocated(By.xpath("//h4[contains(., 'Realizar Transferência')]")), 10000);
    const texto = await titulo.getText();

    assert.strictEqual(texto.includes('Realizar Transferência'), true);
>>>>>>> transferencias
});

Then('devo visualizar a mensagem Erro no login. Tente novamente', async function () {

    const mensagem = await driver.wait(
<<<<<<< HEAD
        until.elementLocated(By.css('.toast')),
=======
        until.elementLocated(By.css('#toast-container .toast')),
>>>>>>> transferencias
        10000
    );

    const texto = await mensagem.getText();

    assert.strictEqual(
<<<<<<< HEAD
        texto,
=======
        texto.trim(),
>>>>>>> transferencias
        'Erro no login. Tente novamente.'
    );
});

Then('não devo ser redirecionado para a página inicial', async function () {
<<<<<<< HEAD

    const url = await driver.getCurrentUrl();

    assert.notStrictEqual(
        url,
        'http://localhost:4000/home'
    );

=======
    const bodyText = await driver.findElement(By.css('body')).getText();
    assert.strictEqual(bodyText.includes('Realizar Transferência'), false);
>>>>>>> transferencias
});