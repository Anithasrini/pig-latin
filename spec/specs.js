describe('firstLetter', function() {
  it("Adds 'ay' to the end of words that start with vowels.", function() {
      expect(firstLetter("Eat")).to.equal("Eatay");
  });
});
