---
tags:
  - post
  - css
  - frameworks
date: 2019-08-10
slug: less-sass-please
title: Less Sass Please
---

When I was planning the architecture for a new Angular app where I work, I was faced with a dillema.

The app was supposed to be extremely customizable. With a core codebase we should be able to apply a theme layer that not only changes the colors, but also can impact spacing, fonts, images or even how some components behaves. This theme layer is to be placed in a different repository and loaded dynamically with our CI/CD flow.

The problem arose when I realized that SASS doesn't support dynamic imports. My idea was to have some sort of importing logic like this:

```scss
@import "#{$client_1}/styles";
// or
@use "#{$client_1}/styles";
```

Well... Sass doesn't work like this. And during my research, I stumbled upon this **heated** discussion, started in 2013, that pretty much stated that this would never be achieved in Sass.

[Fight!](https://github.com/sass/sass/issues/739)

Some people suggested using some sort of string substitution to achieve this, but I was avoid hacks like this until I had absolutely no other option.

And that's when I found the comment by user _jslegers_ saying that [Less](http://www.lesscss.org) actually supported this much needed feature.

---

Advocating for the use of Less instead of Sass

dynamic imports
scoping
link awesome article

```javascript
var uhuh = 1;
```

```js
var ahaha = true;
```
