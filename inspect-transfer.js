const { Builder, By } = require('selenium-webdriver');

(async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:4000/');
    await driver.findElement(By.id('username')).sendKeys('Lia.Rosa');
    await driver.findElement(By.id('senha')).sendKeys('425133');
    await driver.findElement(By.xpath("//button[text()='Entrar']")).click();
    await driver.sleep(3000);

    const selectOrigem = await driver.findElement(By.id('conta-origem'));
    await driver.executeScript('arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event("change", { bubbles: true }));', selectOrigem, '3');

    const selectDestino = await driver.findElement(By.id('conta-destino'));
    await driver.executeScript('arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event("change", { bubbles: true }));', selectDestino, '1');

    await driver.findElement(By.id('valor')).clear();
    await driver.findElement(By.id('valor')).sendKeys('100');
    await driver.findElement(By.xpath("//button[contains(., 'Transferir')]" )).click();

    await driver.sleep(5000);

    const bodyText = await driver.findElement(By.css('body')).getText();
    console.log(bodyText);
  } finally {
    await driver.quit();
  }
})();
