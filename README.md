# FrekUI (β)
> **F**ancy **R**ounded n**E**w **K**it **UI**

Tailwind based UI Kit 

## Installation
### Packet Managers
> NOTE: Install Tailwind for first [(here)](https://tailwindcss.com/docs/installation)
```shell
# using npm
npm i @idkncc/frekui@beta
```
```shell
# using yarn
yarn add @idkncc/frekui@beta
```
### Or Building
```shell
yarn
yarn build
yarn link

# then go to other project with tailwind
yarn link frekui
```
## Usage
Checkout [`/example`](example/) project
### In CSS
#### SCSS
```scss
// You can import whole
@import "~@idkncc/frekui/scss/frekui.scss";

// OR you can selectively import

@import "~@idkncc/frekui/scss/mixins";
@import "~@idkncc/frekui/scss/button";
```
#### CSS
```css
@import url(https://unpkg.com/@idkncc/frekui@latest/dist/frekui.min.css);
```
### JS (f.e. React)
```js
import "@idkncc/frekui/dist/frekui.css"
```
### Plain HTML
```html
<!-- this method isn't recommended! -->
<!-- https://tailwindcss.com/docs/installation/play-cdn -->

<script src="https://cdn.tailwindcss.com"></script>
<style type="text/tailwindcss">
    @import url(https://unpkg.com/@idkncc/frekui@latest/dist/frekui.min.css);
</style>
```
### Other
Folder [`/dist`](dist/) contains all built files