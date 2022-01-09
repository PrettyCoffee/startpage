# @startpage [![license-badge](https://badgen.net/github/license/PrettyCoffee/startpage)](https://github.com/PrettyCoffee/startpage/blob/master/LICENSE)

`@startpage` is a library that provides tools to facilitate the process of creating a browser start page.

Take a look at the [documentation](https://prettycoffee.github.io/startpage/) for more details.

If you want to see how it works in a real world scenario, you can check out the [example project](https://github.com/PrettyCoffee/yet-another-generic-startpage).

## Getting Started

### Installation

```
npm i @startpage/<package>
```

### Creating a new project

If you want to create a new project, you can use one of the startpage `create-react-app` templates:

```
// base template
npx create-react-app <some-app-name> --template startpage

// with emotion js
npx create-react-app <some-app-name> --template startpage-emotion
```

### Packages

| name          | description                                  |                                                                  |
| ------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| bookmarks     | Bookmark management for your startpage       | [docs](https://prettycoffee.github.io/startpage/#/bookmarks)     |
| local-storage | Local storage management for your startpage  | [docs](https://prettycoffee.github.io/startpage/#/local-storage) |
| preset        | Use presets for your startpage.              | [docs](https://prettycoffee.github.io/startpage/#/preset)        |
| search        | Provides a function to search the web        | [docs](https://prettycoffee.github.io/startpage/#/search)        |
| theming       | Provide a design system for your startpage.  | [docs](https://prettycoffee.github.io/startpage/#/theming)       |

### Core concepts

Before you start working with this library, you should be aware of the following core concepts it uses:

- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [React context](https://reactjs.org/docs/context.html)

### Note

I recommend using [Typescript](https://www.typescriptlang.org/) and [Emotion](https://emotion.sh/docs/introduction) with this library since its designed for this usecase. That being said, everything should work just fine without them.
