/*global require*/
var assert = require('assert'),
    t = require('tesuto'),
    c = require('./index');

t.report("colors", function() {
  assert.equal(
    c.reset("hello"),
    "\u001b[0mhello\u001b[0m"
  );
  assert.equal(
    c.bold("hello"),
    "\u001b[1mhello\u001b[22m"
  );
  assert.equal(
    c.dim("hello"),
    "\u001b[2mhello\u001b[22m"
  );
  assert.equal(
    c.italic("hello"),
    "\u001b[3mhello\u001b[23m"
  );
  assert.equal(
    c.underline("hello"),
    "\u001b[4mhello\u001b[24m"
  );
  assert.equal(
    c.inverse("hello"),
    "\u001b[7mhello\u001b[27m"
  );
  assert.equal(
    c.hidden("hello"),
    "\u001b[8mhello\u001b[28m"
  );
  assert.equal(
    c.strikethrough("hello"),
    "\u001b[9mhello\u001b[29m"
  );
  assert.equal(
    c.black("hello"),
    "\u001b[30mhello\u001b[39m"
  );
  assert.equal(
    c.red("hello"),
    "\u001b[31mhello\u001b[39m"
  );
  assert.equal(
    c.green("hello"),
    "\u001b[32mhello\u001b[39m"
  );
  assert.equal(
    c.yellow("hello"),
    "\u001b[33mhello\u001b[39m"
  );
  assert.equal(
    c.blue("hello"),
    "\u001b[34mhello\u001b[39m"
  );
  assert.equal(
    c.magenta("hello"),
    "\u001b[35mhello\u001b[39m"
  );
  assert.equal(
    c.cyan("hello"),
    "\u001b[36mhello\u001b[39m"
  );
  assert.equal(
    c.white("hello"),
    "\u001b[37mhello\u001b[39m"
  );
  assert.equal(
    c.gray("hello"),
    "\u001b[90mhello\u001b[39m"
  );
  assert.equal(
    c.grey("hello"),
    "\u001b[90mhello\u001b[39m"
  );
  assert.equal(
    c.bgBlack("hello"),
    "\u001b[40mhello\u001b[49m"
  );
  assert.equal(
    c.bgRed("hello"),
    "\u001b[41mhello\u001b[49m"
  );
  assert.equal(
    c.bgGreen("hello"),
    "\u001b[42mhello\u001b[49m"
  );
  assert.equal(
    c.bgYellow("hello"),
    "\u001b[43mhello\u001b[49m"
  );
  assert.equal(
    c.bgBlue("hello"),
    "\u001b[44mhello\u001b[49m"
  );
  assert.equal(
    c.bgMagenta("hello"),
    "\u001b[45mhello\u001b[49m"
  );
  assert.equal(
    c.bgCyan("hello"),
    "\u001b[46mhello\u001b[49m"
  );
  assert.equal(
    c.bgWhite("hello"),
    "\u001b[47mhello\u001b[49m"
  );

});

t.result();
