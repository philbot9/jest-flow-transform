# Jest Flow Transform

A transformer for jest that removes flow type annotations from JavaScript files.

## Usage

Add as a transformer in your `package.json` (See [Jest Docs](https://facebook.github.io/jest/docs/configuration.html#transform-object-string-string)).

```json
{
  "jest": {
    "transform": {
      "^.+\\.js(?:\\.flow)?$": "jest-flow-transform"
    }
  }
}
```
