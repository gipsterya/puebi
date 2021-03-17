module.exports = {
  plugins: [
    "react"
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  env: {
    "es6": true,
    "browser": true
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "browser": true
    }
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
}