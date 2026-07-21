const { By } = require('selenium-webdriver');

async function realizarLogin(driver, usuario, senha) {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:4000/');
    await driver.findElement(By.id('username')).sendKeys(usuario);
    await driver.findElement(By.id('senha')).sendKeys(senha);
    await driver.findElement(By.xpath("//button[text()='Entrar']")).click();
}

module.exports = { realizarLogin };
