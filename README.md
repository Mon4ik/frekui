# FrekUI (β)

> **F**ancy **R**ounded n**E**w **K**it **UI**

Tailwind based UI Kit

## Installation

### Via packet managers

```shell
npm i @idkncc/frekui@beta
```

```shell
yarn add @idkncc/frekui@beta
```

### Build yourself

```shell
yarn
yarn build
yarn link

# in other project

yarn link frekui
```

## Usage

### In CSS

#### SCSS
> Tailwind is required!
```scss
// You can import whole
@import "~@idkncc/frekui/scss/frekui.scss";

// OR you can selectively import

@import "~@idkncc/frekui/scss/mixins";
@import "~@idkncc/frekui/scss/button";
```

#### CSS

```css
@import url(https://unpkg.com/@idkncc/frekui@latest/dist/frekui.standalone.css);

/*      with tailwind        */
/*            v              */
@import url(https://unpkg.com/@idkncc/frekui@latest/dist/frekui.min.css);

```

### JS (f.e. React)

```js
import "@idkncc/frekui/dist/frekui.standalone.css"

// or if tailwind installed:
import "@idkncc/frekui/dist/frekui.min.css"
```

### Plain HTML (without Tailwind)

```html
<link href="https://unpkg.com/@idkncc/frekui@latest/dist/frekui.standalone.css" rel="stylesheet">
```

### Other

Folder [`/dist`](dist/) contains all built files