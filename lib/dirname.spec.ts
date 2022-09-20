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

describe('Dirname URL', () => {

  it('dirname url test 01', () => {
    expect(dirname('http://127.0.0.1:8080/a/b/c')).equals('http://127.0.0.1:8080/a/b');
  });

  it('dirname url test 02', () => {
    expect(dirname('http://127.0.0.1:8080/')).equals('http://127.0.0.1:8080');
  });

});
