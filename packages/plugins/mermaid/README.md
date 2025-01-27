# @renovamen/vuepress-plugin-mermaid@next

[![npm](https://img.shields.io/npm/v/@renovamen/vuepress-plugin-mermaid/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@renovamen/vuepress-plugin-mermaid/v/next) [![docs](https://img.shields.io/badge/Docs-@renovamen/vuepress--plugin--mermaid-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/mermaid.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

Plugin `@renovamen/vuepress-plugin-mermaid@next` for adding [Mermaid](https://mermaid-js.github.io) to [VuePress 2](https://v2.vuepress.vuejs.org/) to create complex diagrams in Markdown.

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/mermaid.html)


&nbsp;

## Install

```bash
yarn add @renovamen/vuepress-plugin-mermaid@next
# or
npm install @renovamen/vuepress-plugin-mermaid@next
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "@renovamen/vuepress-plugin-mermaid"
    ]
  ]
}
```


&nbsp;

## Options

You can use the following options to set theme for Mermaid diagrams, for example:

```js
module.exports = {
  plugins: [
    [
      "@renovamen/vuepress-plugin-mermaid", {
        theme: "default",  // default: "default"
        darkTheme: "dark",  // default: "dark"
        darkSelector: "html",  // default: undefined
        darkClass: "dark"  // default: undefined
      }
    ]
  ]
}
```

[Here](https://github.com/mermaid-js/mermaid/tree/develop/src/themes) are all themes supported by Mermaid.


### theme

- Type: `string`

- Default: `"default"`

- Details: Theme


### darkTheme

- Type: `string`

- Default: `"dark"`

- Details: Theme for dark mode. Only works when [darkSelector](#darkselector) and [darkClass](#darkclass) are set.


### darkSelector

- Type: `string`

- Default: `undefined`

- Details

  - A CSS selector for the plugin to select an element and check if the dark mode is enabled by [darkClass](#darkclass)
  - For default theme and Gungnir theme, this option should be `html`


### darkClass

- Type: `string`

- Default: `undefined`

- Details

  - A class name for the plugin to check if the dark mode is enabled
  - For default theme and Gungnir theme, this option should be `dark`


**Tips:** The default theme and Gungnir theme will add a class name `dark` to the `html` element to enable dark mode.


&nbsp;

## Usage

The token info of the code block should be `mermaidjs`, for example:

~~~
```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```
~~~

Refer to the [documentation of Mermaid](https://mermaid-js.github.io) for more information.


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE)
