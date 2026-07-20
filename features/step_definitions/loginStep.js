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
return 'pending';
});


When('realizo o login com as seguintes credenciais:', async function (dataTable) {
    const data = dataTable.rowsHash();

    const usuario = data.usuario;
    const senha = data.senha;

    await driver.findElement(By.id('username')).sendKeys(usuario);
    await driver.findElement(By.id('senha')).sendKeys(senha);
    await driver.findElement(By.xpath("//button[text()='Entrar']")).click();
return 'pending';
});


Then('devo ser redirecionado para a página inicial', async function () {
    await driver.wait(until.elementLocated(By.xpath('//*[@id="app=section"]/div[1]//h4')), 5000); 
    const titulo = driver.findElement(By.xpath('//*[@id="app=section"]/div[1]//h4'))

    assert.strictEqual('Realizar Transferência', titulo);
});