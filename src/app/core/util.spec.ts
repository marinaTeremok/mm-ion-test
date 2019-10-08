import { Util } from './util';

describe('Util', () => {
  let util: Util;

  beforeEach(() =>{
    util  = new Util();
  });

  it('should create an instance', () => {
    expect(new Util()).toBeTruthy();
  });

  it('should validate number', () => {
    expect(Util.isNumber(5)).toBeTruthy();
    expect(Util.isNumber('a')).toBeFalsy();
    expect(Util.isNumber('4a')).toBeFalsy();
  });  
});
