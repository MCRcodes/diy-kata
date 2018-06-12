const { joinNames } = require('../src');

describe('joinNames', () => {
  it('should return string of names, seperated by commas and an ampersand', () => {
      expect(joinNames([{
        name: 'Bart'
      }, {
        name: 'Lisa'
      }, {
        name: 'Maggie'
      }])).toBe('Bart, Lisa & Maggie');

      expect(joinNames([{
        name: 'John'
      }, {
        name: 'Paul'
      }, {
        name: 'Ringo'
      }, {name: 'George'
    }])).toBe('John, Paul, Ringo & George');
    expect(joinNames([{
      name: 'Tom'
    }, {
      name: 'Jerry'
   }])).toBe('Tom & Jerry');
  });

});
