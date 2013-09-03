Ractive = require('Ractive');

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = '<strong>{{weak}}</strong>';
    var expected = '<strong>wat</strong>';

    plugin.compile(content, 'template.rac', function(error, data) {
      var r;

      expect(error).not.to.be.ok;
      r = new Ractive({'template': eval(data), 'data': {'weak': 'wat'}});
      expect(r.renderHTML()).to.equal(expected);
      done();
    });
  });
});
