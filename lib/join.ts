import { isURL, parseURL } from './parse-url.js';
import { normalize } from './normalize.js';

export function join(...paths: Array<string>) {
  return normalize(
    paths
      .map((path, index) => {
        if (index > 0) {
          if (isURL(path)) {
            path = parseURL(path).path ?? '';
          }
          return normalize(path).replace(/^\//, '');
        } else {
          return normalize(path);
        }
      })
      .join('/'),
  );
}
