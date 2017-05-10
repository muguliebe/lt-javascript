module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  "plugins": [
    "standard",
    "promise"
  ],
  "env": {
    "es6": true,
    "browser": false,
    "node": true
  },
  "rules": {
    "indent": ["error", 2],
    "no-undef": "off",
    "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "ignore"
    }],
    "no-unused-vars": [1, { "vars": "local", "args": "after-used", "ignoreRestSiblings": false }]
  }
};
