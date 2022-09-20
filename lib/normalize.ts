import { segmentalize } from './helper.js';
import { isURL, parseURL, stringifyURL } from './parse-url.js';

export function normalize(url: string) {
  if (isURL(url)) {
    const { protocol, host, port, path } = parseURL(url);
    return stringifyURL({ protocol, host, port, path: path ? segmentalize(path).join('/') : '' });
  } else {
    return segmentalize(url).join('/');
  }
}
