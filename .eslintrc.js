module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'plugin:vue/recommended'],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules:{
        "vue/no-use-v-if-with-v-for": ["error", {
            "allowUsingIterationVar": false
        }]
    }
}