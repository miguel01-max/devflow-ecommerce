
const test = require('node:test');
const assert = require('node:assert');
const server = require('./app');

test('A aplicação responde com status 200', async () => {
  await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', resolve);
  });

  try {
    const address = server.address();
    const response = await fetch(
      `http://127.0.0.1:${address.port}`
    );

    assert.strictEqual(response.status, 200);

    const data = await response.json();

    assert.strictEqual(
      data.mensagem,
      'DevFlow Solutions - E-commerce funcionando!'
    );
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
});
