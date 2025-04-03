# docusaurus-plugin-umami

A Docusaurus plugin for adding Umami Analytics to your site.

## Installation

```bash
npm install docusaurus-plugin-umami
# or
yarn add docusaurus-plugin-umami
```

## Usage

Add the plugin to your `docusaurus.config.js`:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-umami",
      {
        websiteId: "YOUR_WEBSITE_ID", // Required
        scriptSrc: "https://analytics.yourdomain.com/script.js", // Required
      },
    ],
  ],
};
```
