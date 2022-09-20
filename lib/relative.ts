import { join } from './join.js';
import { segmentalize } from './normalize.js';

export function relative(from: string, to: string) {
  const sfs =  segmentalize(from);
  const sts =  segmentalize(to);
  const index = sfs.findIndex((f, index) => f !== sts[index]);
  if (index < 0) {
    return join(...sts.slice(sfs.length));
  } else {
    return join(
      ...Array.from({ length: sfs.length - index }, () => '..'),
      ...sts.slice(index),
    );
  }
}
