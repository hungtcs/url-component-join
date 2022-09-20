import { isURL, parseURL } from './parse-url.js';

export function normalize(url: string) {
  if (isURL(url)) {
    const { protocol, host, port, path } = parseURL(url);
    return `${ protocol }://${ host ? `${ host }${ port ? `:${ port }` : '' }` : '' }${ path ? segmentalize(path).join('/') : '' }`;
  } else {
    return segmentalize(url).join('/');
  }
}

export function segmentalize(path: string) {
  return path
    .replace(/\/+/g, '/')
    .split('/')
    .filter(segment => segment !== '.')
    .reduce<Array<string>>(
      (segments, segment) => {
        if (segment === '..') {
          if (segments.length < 1) {
            segments.unshift('..');
          } else {
            const pop = segments.pop();
            if (pop === '..') {
              segments.push('..', '..');
            }
          }
        } else {
          segments.push(segment);
        }
        return segments;
      },
      [],
    );
}
