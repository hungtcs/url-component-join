import { expect } from '@open-wc/testing';
import { isURL } from './parse-url';

describe('Is URL', () => {

  it('is url test 01', () => {
    expect(isURL('http://127.0.0.1:8080/a/b/c/d/e.f')).eq(true);
  });

  it('is url test 02', () => {
    expect(isURL('file:///a/b/c/d/e.f')).eq(true);
  });

  it('is url test 03', () => {
    expect(isURL('/a/b/c/d/e.f')).eq(false);
  });

});
