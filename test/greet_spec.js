greet = require("greet");

describe('greet', function(){
  it("should greet a person by name", function(){
    expect(greet("jesse")).to.eql("hello, jesse");
  });
  it("should greet a person flirtatiously if drunk", function(){
    expect(greet("jesse", true)).to.eql("hello jesse, you look sexy today");
  });
});
