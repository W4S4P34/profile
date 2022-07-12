module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "react-hooks",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "node": true
    },
    "globals": {
        "localStorage": true,
        "ga": true,
        "fetch": true,
        "window": true,
        "document": true,
        "Raven": true,
        "ENV": true
    },
    "rules": {
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-console": 0,
        "react/sort-comp": [1, {
            "order": [
                "type-annotations",
                "static-methods",
                "lifecycle",
                "everything-else",
                "render"
            ]
        }]
    }
}