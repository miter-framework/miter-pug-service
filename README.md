[![Build Status](https://travis-ci.org/miter-framework/miter-pug-service.svg?branch=master)](https://travis-ci.org/miter-framework/miter-pug-service)

# Miter Pug Service

A [Miter][miter] service exposing Pug templating functionality.

## Installation

Install `miter-pug-service` using NPM.

```bash
npm install --save miter-pug-service
```

## Example

To use `miter-pug-service` as the template engine in miter, you need to specify it as the engine
when you launch the miter service.

```typescript
import { Miter } from 'miter';
import { PugService } from 'miter-pug-service';

Miter.launch({
    name: 'my-server',
    
    //...
    
    views: {
        fileRoot: './views',
        engine: PugService
    }
});
```

## Contributing

Miter is a relatively young framework, and there are bound to be many ways that it can be improved. If you notice a bug, or would like to request a feature, feel free to [create an issue][create_issue]. Better yet, you can [fork the project][fork_miter] and submit a pull request with the added feature.

## Changelog

[See what's new][whats_new] in recent versions of Miter Pug Service.

## Attribution

Special thanks to [BrowserStack][browserstack] for generously hosting our cross-browser integration tests!

[![BrowserStack](./attribution/browser-stack.png)][browserstack]

[miter]: https://github.com/miter-framework/miter
[create_issue]: https://github.com/miter-framework/miter/issues/new
[fork_miter]: https://github.com/miter-framework/miter/pulls#fork-destination-box
[whats_new]: https://github.com/miter-framework/miter/blob/master/CHANGELOG.md
[browserstack]: https://www.browserstack.com
