describe('translate', function() {
  it("return 'ananabay' if given 'banana'", function() {
    expect(translate("banana")).to.equal("ananabay");
  });
  it("Adds 'ay' to the end of words that start with vowels", function() {
      expect(translate("eat")).to.equal("eatay");
  });
  // it("Moves the first letter to the end of words that start with consonants", function() {
  //   expect(translate("pear")).to.equal("earp");
  // });
});
