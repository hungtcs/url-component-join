import { normalize } from './normalize.js';

export function dirname(path: string) {
  const normalizedPath = normalize(path);
  const segments = normalizedPath.split('/');
  segments.pop();
  return segments.join('/');
}
