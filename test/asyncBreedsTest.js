const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');
const bombayInfo = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

describe("#breedDetailsFromFile", () => {
  it('should, via callback, provide details for the bombay breed', (done) => {
    breedDetailsFromFile('Bombay', (bombay) => {
      assert.equal(bombay, bombayInfo);
      done();
    });
  });
  it('provides, via callback, undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(undefined, desc);
      done(); 
    });
  });
});