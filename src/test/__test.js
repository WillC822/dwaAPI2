const expect = require('chai').expect;
const tool = require('../src/tool.js')

describe('URL GEN TESTING', () => {
  it('Is the URL the proper length', () => {
    const properLength = 150;
    const url = tool.genURL(properLength);
    expect(url.length).to.equal(properLength)
  })


  it('Is genURL a function', () => {
    expect(typeof(tool.genURL)).to.be.equal('function');
  })


  it('Is it a string', () => {
    expect(typeof(stingTest)).to.be.equal('string');
  })

})
