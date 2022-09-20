import { normalize } from './normalize.js';
import { parseURL, stringifyURL } from './parse-url.js';

export function dirname(path: string) {
  const { protocol, host, port, path: normalizedPath = '' } = parseURL(normalize(path));

  const segments = normalizedPath.split('/');
  segments.pop();

  if (protocol) {
    return stringifyURL({ protocol, host, port, path: segments.join('/') });
  } else {
    return segments.join('/');
  }
}
