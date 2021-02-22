require('dotenv').config();

const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './todomvc-tests/**/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      "chrome":{
        "args": [ "--headless", "--no-sandbox" ]
      },
      url: 'http://localhost',
      waitForTimeout: 5000,
      waitForNavigation: 'networkidle0',
      waitForAction: 0,
      show: false,
    },

    REST: {},

    CustomHelper: {
      require: './todomvc-tests/helpers/custom.helper.js'
    }
  },

  include: {
    TodosPage: './todomvc-tests/pages/todos.page.js'
  },
  plugins: {
    "allure": {
      "enabled": true
    }

  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}
