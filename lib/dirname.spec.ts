import { expect } from '@open-wc/testing';
import { dirname } from './dirname.js';

describe('Dirname', () => {

  it('dirname test 01', () => {
    expect(dirname('a/b/c')).equals('a/b');
  });

  it('dirname test 02', () => {
    expect(dirname('/a/b/c/1.txt')).equals('/a/b/c');
  });

});
