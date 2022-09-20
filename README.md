# URL Component Join

normalize and join url components

## Installation

```shell
npm install --save url-component-join
```

## Functions

### `normalize(path: string): string`

Normalizes the given path, remove redundant `/` and resolving `..` and `.` segments.

```ts
import { normalize } from 'url-component-join';

normalize('//a/a/..//b.c');
// /a/b.c
```

### `join(...paths: Array<string>): string`

Normalize and join several segments into one path

```ts
import { join } from 'url-component-join';

join('//a/a/', '..', '//b.c');
// /a/b.c

join('http://127.0.0.1:8080/a//b', '//c///d')
// http://127.0.0.1:8080/a/b/c/d

join('http://127.0.0.1:8080/a//b', 'http://127.0.0.1:8080//c///d')
// http://127.0.0.1:8080/a/b/c/d
```
