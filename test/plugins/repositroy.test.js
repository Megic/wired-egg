const mock = require('egg-mock');
const assert = require('power-assert');

describe('plugin: repository', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'base',
      framework: true,
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should found repository in ctx', () => {
    const ctx = app.mockContext();
    assert(ctx.repository.IUUser);
  });

  it('should get sequelize repository if class getType is sequelizeModel', () => {
    const ctx = app.mockContext();
    assert(ctx.repository.IUUser.getType() === 'sequelizeModel');
    assert(ctx.repository.IUUser.findOne);
  });

  it('should get adapter repository if class getType is adapter', () => {
    const ctx = app.mockContext();
    assert(ctx.repository.IUFileAttachment.getType() === 'adapter');
  });
});

