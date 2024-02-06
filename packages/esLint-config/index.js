module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        // Indentação de 2 espaços
        'indent': ['error', 2],
        // Espaço antes de chaves em objetos e funções
        'space-before-blocks': ['error', 'always'],
        // Ponto e vírgula no final de cada instrução
        'semi': ['error', 'always'],
        // Proibir o uso de 'var'
        'no-var': 'error',
        // Proibir eval()
        'no-eval': 'error',
        // Exigir === e !== em vez de == e !=
        'eqeqeq': 'error',
        // Proibir o uso de funções perigosas (por exemplo, `eval`, `document.write`, etc.)
        'no-restricted-syntax': [
            'error',
            {
                selector: 'CallExpression[callee.name="eval"]',
                message: 'Eval é perigoso e não deve ser usado.'
            },
            {
                selector: 'CallExpression[callee.name="document.write"]',
                message: 'document.write() é perigoso e não deve ser usado.'
            }
        ],
        // Convenção de nomenclatura para constantes
        'camelcase': ['error', { 'properties': 'always' }],
        // Uso consistente de ponto e vírgula em propriedades de objeto
        'object-curly-spacing': ['error', 'always']
    }
};
