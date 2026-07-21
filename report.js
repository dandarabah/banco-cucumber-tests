const report = require('multiple-cucumber-html-reporter');

report.generate({
<<<<<<< HEAD
    jsonDir: 'reports',
    reportPath: 'reports/html',

    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Computador Local',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },

    customData: {
        title: 'Execução dos testes',
        data: [
            {
                label: 'Projeto',
                value: 'Banco Cucumber Tests'
            },
            {
                label: 'Framework',
                value: 'Cucumber + Selenium'
            }
        ]
    }
});
=======
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
>>>>>>> transferencias
