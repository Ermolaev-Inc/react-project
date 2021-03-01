![Logo](https://user-images.githubusercontent.com/57585370/107797708-0eb4c680-6d7d-11eb-83c4-d289a4b707d2.png)
<div align="center">

![Release](https://img.shields.io/github/v/release/Ermolaev-Inc/react-project)


![Lint](https://github.com/Ermolaev-Inc/react-project/actions/workflows/lint.yml/badge.svg)
![Build](https://github.com/Ermolaev-Inc/react-project/actions/workflows/build.yml/badge.svg)

</div>

# Getting Started with React project
This project was bootstrapped with [react-project](https://github.com/Ermolaev-Inc/react-project)

## Available Features
- React 17.0.1
- TypeScript 4.0.3
- React-components-kit 2.1.0 
- Eslint 7.17.0
- Jesse config for eslint 2.2.3
- Styled-components 5.2.1
- Node-sass 4.14.1
- Lint & Build checkers (Github Actions)

## [React-components-kit](https://github.com/Ermolaev-Inc/react-components-kit)
You can use components from react-components-kit (erck) library

## Project Structure
In **src** folder you can find:
- **components** <br>
  Your independent components should be located here <br>
  If you use css-in-js then create a single file <br>
  If you use sass/scss/less then create folder and two files: <br> 
  **ComponentName.tsx** and **ComponentName.styles.sass**
- **pages** <br>
  The pages collected from the components should be here <br>
  Examples: <br>
  Home, About, Contacts ...
- **styles** <br>
  Styles for your pages should be here. It can be styled component or sass/scss/less
  
## Available Scripts
### `npm run start` or `yarn start`
Runs the app in dev mode

### `npm run build` or `yarn build`
Builds the app for production to the build folder

### `npm run lint` or `yarn lint`
Checks compliance with the code style ([Jesse](https://github.com/ErmolaevID/Jesse))

### `npm run lint-fix` or `yarn lint-fix`
Fixes code style errors ([Jesse](https://github.com/ErmolaevID/Jesse))

## Create React App
react-project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

## License
React-project is open source software licensed as MIT
