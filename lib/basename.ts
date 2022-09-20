import { normalize } from './normalize.js';

export function basename(path: string) {
  const normalizedPath = normalize(path);
  return normalizedPath.split('/').pop();
}
