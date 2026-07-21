const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './reports',
  reportPath: './reports/html',
  reportName: 'Relatório de Testes',
  pageTitle: 'Relatório Cucumber',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Windows',
    platform: {
      name: 'Windows',
      version: '10'
    }
  }
});
