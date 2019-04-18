module.exports = {
  'hooks': {
    'pre-commit': 'node_modules/eslint/bin/eslint.js . --ext .js --ext .jsx --fix'
  }
}