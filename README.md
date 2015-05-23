# logup
Beautiful console log (using [logdown](https://github.com/caiogondim/logdown)) with placeholders.

## How to use
```bash
$ npm install logup --save
```

After in your project:
```js
var Logup = require('logup');
var logup = new Logup('server');

logup.log('started at port *%s* in *%s* mode', 3000, development);
logup.log('API `%s` is *%s*', 'uapi', 'mocked');
logup.log('API `%s` is *%s*', 'authapi', 'mocked');
```

![](https://github.com/maxmert/logup/blob/master/screenshot.png)
