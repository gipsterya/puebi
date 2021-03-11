module.exports = {
  plugins: [
    "react"
  ],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "browser": true,
    },
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
}