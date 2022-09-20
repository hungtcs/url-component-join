import { join } from './join.js';
import { expect } from '@open-wc/testing';

describe('Join', () => {

  it('should work 1', () => {
    const path = join('/1//2///3///4//', '5');
    expect(path).equals('/1/2/3/4/5');
  });

  it('should work 2', () => {
    const path = join('1', '2', '3', '4', '5', '');
    expect(path).equals('1/2/3/4/5/');
  });

  it('should work 3', () => {
    const path = join('1', '2', '3', '4', '5', '..', '..', '0');
    expect(path).equals('1/2/3/0');
  });

  it('should work 4', () => {
    const path = join('1', '2', '3', '.', '4', '.', '5', '..', '..', '0');
    expect(path).equals('1/2/3/0');
  });

  it('should work 5', () => {
    expect(join('./a/b/c')).equals('a/b/c');
  });

  it('should work 6', () => {
    expect(join('..', '..', '..', 'a', 'b', 'c')).equals('../../../a/b/c');
  });

});

describe('Join URL', () => {

  it('join url test 01', () => {
    expect(join('http://127.0.0.1:8080/a//b', '//c///d')).eq('http://127.0.0.1:8080/a/b/c/d');
  });

  it('join url test 02', () => {
    expect(join('http://127.0.0.1:8080/a//b', 'http://127.0.0.1:8080//c///d')).eq('http://127.0.0.1:8080/a/b/c/d');
  });

});
