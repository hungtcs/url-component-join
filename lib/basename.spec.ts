import { expect } from '@open-wc/testing';
import { basename } from './basename.js';

describe('Basename', () => {

  it('basename test 1', () => {
    expect(basename('/a.c')).equals('a.c');
  });

  it('basename test 2', () => {
    expect(basename('a/../a/a.c')).equals('a.c');
  });

  it('basename test 3', () => {
    expect(basename('/')).equals('');
  });

  it('basename test 4', () => {
    expect(basename('/a/b/')).equals('');
  });

});

describe('Basename URL', () => {

  it('basename url test 1', () => {
    expect(basename('http://127.0.0.1:8080/a.c')).equals('a.c');
  });

  it('basename url test 2', () => {
    expect(basename('http://127.0.0.1:8080')).equals('');
  });

});
