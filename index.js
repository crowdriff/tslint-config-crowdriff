module.exports = {
  rulesDirectory: ['tslint-plugin-prettier'],
  rules: {
    prettier: [true, '.prettierrc.js'],
    'interface-name': [true, 'never-prefix'],
    'object-shorthand-properties-first': false,
    'no-implicit-dependencies': false,
    'no-submodule-imports': false,
    'member-access': false,
    'jsx-no-lambda': false,
    'no-console': false,
    'object-literal-sort-keys': [true, 'ignore-case', 'match-declaration-order'],
    // This rule is here for now because of https://github.com/palantir/tslint-react/issues/120
    'variable-name': [true, 'ban-keywords', 'check-format', 'allow-pascal-case']
  },
  extends: [
    'tslint:latest',
    'tslint-react',
    'tslint-config-airbnb',
    'tslint-config-prettier',
  ]
}