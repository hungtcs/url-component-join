import { expect } from '@open-wc/testing';
import { normalize } from './normalize.js';

describe('Normalize Path', () => {

  it(`normalize test 1`, () => {
    expect(normalize('a//b///c')).equals('a/b/c');
  });

  it(`normalize test 2`, () => {
    expect(normalize('a//b///c///..')).equals('a/b');
  });

  it(`normalize test 3`, () => {
    expect(normalize('/a//b///c///..')).equals('/a/b');
  });

  it(`normalize test 4`, () => {
    expect(normalize('/a//b///c///../')).equals('/a/b/');
  });

  it(`normalize test 5`, () => {
    expect(normalize('..//a//b///c///../')).equals('../a/b/');
  });

  it(`normalize test 6`, () => {
    expect(normalize('..//a/../..///b///c///../')).equals('../../b/');
  });

});

describe('Normalize URL', () => {

  it('normalize url 01', () => {
    expect(normalize('http://127.0.0.1:8080/some/path/to/file-name.ext')).equals('http://127.0.0.1:8080/some/path/to/file-name.ext');
  });

  it('normalize url 02', () => {
    expect(normalize('http://127.0.0.1:8080//some///path////to/file-name.ext')).equals('http://127.0.0.1:8080/some/path/to/file-name.ext');
  });

  it('normalize url 03', () => {
    expect(normalize('file:///some///path////to/file-name.ext')).equals('file:///some/path/to/file-name.ext');
  });

  it('normalize url 04', () => {
    expect(normalize('file:///some///path////to/../file-name.ext')).equals('file:///some/path/file-name.ext');
  });

});
