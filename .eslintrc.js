module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true
    },
    extends: [
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 11
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4],
        'no-restricted-syntax': 0,
        'no-await-in-loop': 0,
        'no-console': 0
    }
};
