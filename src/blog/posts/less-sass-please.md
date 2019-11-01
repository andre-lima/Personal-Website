---
tags:
  - post
  - css
  - frameworks
date: 2019-08-10
slug: less-sass-please
title: Less Sass Please
---

When I was planning the architecture for a new Angular app where I work, I was faced with a dillema...

The app was supposed to be extremely customizable. With a core codebase we should be able to apply a theme layer that not only changes the colors, but also can impact spacing, fonts, settings, images or even how the business logic may behave. This theme layer is to be placed in a different repository and loaded dynamically with our CI/CD flow.

## Gimme dynamic imports

The first problems encountered was when I realized that SASS doesn't support dynamic imports. My idea was to have some sort of importing logic like this:

```scss
$client_path: "../../src/themes/awesome_client_1";

@import "#{$client_path}/styles";
// or
@use "#{$client_path}/styles";
```

_Attempt to import things dynamically in SCSS_

Well... Sass doesn't support this. And during my research, I stumbled upon this **heated** discussion, started in 2013, that pretty much stated that this would never be achieved in Sass.

[⚔️ Fight!](https://github.com/sass/sass/issues/739)

Some people suggested using some sort of string substitution to achieve this, but I was avoiding hacks like this until I had absolutely no other option.

And that's when I found the comment by user _jslegers_ on that thread saying that [Less](http://www.lesscss.org) actually supported this much needed feature. So... of to check _Less_ out.

```less
@client_path: "../../src/themes/awesome_client_1";

@import "@{client_path}/styles";
```

_Importing things dynamically in LESS_

> By the way... did you know that even though Sass is perceived by most as being more popular, it actually has fewer stars on Github? 🤯

After some tests, I confirmed that the dynamic imports of Less worked perfectly for me, and I even learned some very interesting things about the differences about Sass and Less.

## What about optional imports?

Come on Sass! I'd really hope to be able to import things that I don't know yet if they'll exist.

This proved important on my Angular application. Since the styles in Angular components are scoped to each component, I needed to add an import to a file that may not exist if the client design doesn't require style overrides.

```less
// In generic codebase - Header component:
@import (optional) "@{client_path}/overrides/header.less";
```

_Won't halt compilation if the file does not exists_

## Variable overrides

The following article was written by one of the maintainer of the Less repositories, and he goes into a lot of detail into how both pre-processors differ.

Definitely a must-read even if you're happy with your current choice.

<a href="https://getcrunch.co/2015/10/08/less-the-worlds-most-misunderstood-css-pre-processor/" target="_blank">Less: The World’s Most Misunderstood CSS Pre-processor</a>

The article mentions that due to the **declarative vs imperative** nature of both languages the variable declaration order matters in _Sass_ but not in _Less_. At first I thought this wasn't a very big deal, until (on another more mature project) I tried to override some variables from a _theme_ file and it didn't work.

> "Why isn't this variable value changing?"

I asked myself...

See if you can spot the mistake.

```scss
// _generic.scss
$primary-color: #b4da55;
$main-text-color: $primary-color;

// _theme.scss
$primary-color: #f1e57a;

// main.scss
@import "generic";
@import "client_1/theme";
@import "components/header";

// _header.scss
.headerTitle {
  color: $main-text-color; // ???????
}
```

_What color will the header title be in the end?_

Since _Sass_ evaluates variables imperatively, _\$main-text-color_ will have the value **#b4da55**. If you wanted to change that variable to take the new _\$primary-color_ value, you'd need to override this and **all other variables** that had the primary value assigned to it in the \__generic.scss_ in the \__theme.scss_ as well.

Luckily _Less_ ( 😍 ) doesn't have this problem, and even if this wouldn't be an issue on your _Sass_ projects, it's always good to keep in mind how it works.

## The bad part

Although _Less_ lacks some features (that I honestly don't even miss that much) present in other frameworks, the worst part for me was adapting to the new syntax.

After a while I ended up enjoying it, although <a href="https://prettier.io/" target="_blank">**Prettier**</a> does not format its _mixins_ correctly, **and this is still driving me nuts!**

```less
.mq(
  desktop-only,
  {@carousel-arrows-spacing: @space-xs ; background-color: red; font-size:
    111px;},
  other_param
);
```

_Media query mixin 👺: Not so much "prettier", is it?_

## Use what suits your project better

I learned an important lesson here: Use the better tool for the job, not the shiniest!

It may be easier to go with the flow, but don't dismiss any technology (even older ones) just because you're used to something else. By researching a bit more about the problem you're trying to solve you might end up finding a tool that'll make your life easier and learn something new as a bonus.
