import { equal } from "assert";
import { report, result } from "tesuto";
import { bgBlack, bgBlue, bgCyan, bgGreen, bgMagenta, bgRed, bgWhite, bgYellow, black, blue, bold, cyan, dim, gray, green, grey, hidden, inverse, italic, magenta, red, reset, strikethrough, underline, white, yellow, } from "./index.js";
report("colors", function () {
    equal(reset("hello"), "\u001b[0mhello\u001b[0m");
    equal(bold("hello"), "\u001b[1mhello\u001b[22m");
    equal(dim("hello"), "\u001b[2mhello\u001b[22m");
    equal(italic("hello"), "\u001b[3mhello\u001b[23m");
    equal(underline("hello"), "\u001b[4mhello\u001b[24m");
    equal(inverse("hello"), "\u001b[7mhello\u001b[27m");
    equal(hidden("hello"), "\u001b[8mhello\u001b[28m");
    equal(strikethrough("hello"), "\u001b[9mhello\u001b[29m");
    equal(black("hello"), "\u001b[30mhello\u001b[39m");
    equal(red("hello"), "\u001b[31mhello\u001b[39m");
    equal(green("hello"), "\u001b[32mhello\u001b[39m");
    equal(yellow("hello"), "\u001b[33mhello\u001b[39m");
    equal(blue("hello"), "\u001b[34mhello\u001b[39m");
    equal(magenta("hello"), "\u001b[35mhello\u001b[39m");
    equal(cyan("hello"), "\u001b[36mhello\u001b[39m");
    equal(white("hello"), "\u001b[37mhello\u001b[39m");
    equal(gray("hello"), "\u001b[90mhello\u001b[39m");
    equal(grey("hello"), "\u001b[90mhello\u001b[39m");
    equal(bgBlack("hello"), "\u001b[40mhello\u001b[49m");
    equal(bgRed("hello"), "\u001b[41mhello\u001b[49m");
    equal(bgGreen("hello"), "\u001b[42mhello\u001b[49m");
    equal(bgYellow("hello"), "\u001b[43mhello\u001b[49m");
    equal(bgBlue("hello"), "\u001b[44mhello\u001b[49m");
    equal(bgMagenta("hello"), "\u001b[45mhello\u001b[49m");
    equal(bgCyan("hello"), "\u001b[46mhello\u001b[49m");
    equal(bgWhite("hello"), "\u001b[47mhello\u001b[49m");
});
result();
