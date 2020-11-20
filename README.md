# GGS.JS
NPM Package For Easily Interacting With The GGS API

<a href="https://discord.gg/ggs" target="_blank"><img alt="GGS Discord" src="https://img.shields.io/badge/discord-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white"/></a>
<a href="https://www.npmjs.com/package/ggs.js" target="_blank"><img alt="GGS.JS NPM Page" src="https://img.shields.io/badge/-NPM-CB3837?&style=for-the-badge&logo=npm&logoColor=white"/></a>
<br>
<br>


## Documentation
<br>

### **Import Module**

```js
const ggsjs = require('ggs.js');
```

### **Discord ID Query**

```js
let data = ggsjs.discordQuery('api token', 'discordid')
```

### **Steam ID Query**

```js
let data = ggsjs.steamQuery('api token', 'steamid64')
```

### **Santos Taxes Query**

```js
let data = ggsjs.taxesQuery('api token')
```

### **Servers Query**

```js
let data = ggsjs.serversQuery('api token')
```

### **Shouts Query**

```js
let data = ggsjs.shoutsQuery('api token')
```
