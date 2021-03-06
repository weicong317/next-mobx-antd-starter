module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb', 'plugin:react/recommended', 'prettier/react'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.jsx', '.js', '.json'],
            },
            alias: [['src', './src']],
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'unicorn'],
    rules: {
        semi: 0,
        indent: 0,
        'react/jsx-filename-extension': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'no-use-before-define': 0,
        'no-unused-vars': 0,
        'implicit-arrow-linebreak': 0,
        'consistent-return': 0,
        'arrow-parens': 0,
        'object-curly-newline': 0,
        'operator-linebreak': 0,
        'import/no-extraneous-dependencies': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
    },
};
