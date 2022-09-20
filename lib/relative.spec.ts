import { expect } from '@open-wc/testing';
import { relative } from './relative.js';

describe('Relative', () => {

  it('relative test 1', () => {
    expect(relative('1/2/3', '1/2/3/4/5/6/7')).equals('4/5/6/7');
  });

  it('relative test 2', () => {
    expect(relative('1/2/3', '1/2/3/../../../0')).equals('../../../0');
  });

  it('relative test 3', () => {
    expect(relative('1', '../2')).equals('../../2');
  });

  it('relative test 4', () => {
    expect(relative('1/2/3', '../0')).equals('../../../../0');
    expect(relative('1/2/3', '../../0')).equals('../../../../../0');
    expect(relative('1/2/3', '../../../0')).equals('../../../../../../0');
  });

  it('relative test 5', () => {
    expect(relative('..', '../a')).equals('a');
  });

});
