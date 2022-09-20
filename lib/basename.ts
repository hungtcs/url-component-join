import { normalize } from './normalize.js';
import { isURL, parseURL } from './parse-url.js';

export function basename(path: string) {
  let normalizedPath = normalize(path);
  if (isURL(normalizedPath)) {
    normalizedPath = parseURL(normalizedPath).path ?? '';
  }
  return normalizedPath.split('/').pop();
}
