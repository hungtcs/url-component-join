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
