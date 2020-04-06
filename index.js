export const reset = (str) => `\u001b[0m${str}\u001b[0m`

export const bold = (str) => `\u001b[1m${str}\u001b[22m`
export const dim = (str) => `\u001b[2m${str}\u001b[22m`
export const italic = (str) => `\u001b[3m${str}\u001b[23m`
export const underline = (str) => `\u001b[4m${str}\u001b[24m`
export const inverse = (str) => `\u001b[7m${str}\u001b[27m`
export const hidden = (str) => `\u001b[8m${str}\u001b[28m`
export const strikethrough = (str) => `\u001b[9m${str}\u001b[29m`

export const black = (str) => `\u001b[30m${str}\u001b[39m`
export const red = (str) => `\u001b[31m${str}\u001b[39m`
export const green = (str) => `\u001b[32m${str}\u001b[39m`
export const yellow = (str) => `\u001b[33m${str}\u001b[39m`
export const blue = (str) => `\u001b[34m${str}\u001b[39m`
export const magenta = (str) => `\u001b[35m${str}\u001b[39m`
export const cyan = (str) => `\u001b[36m${str}\u001b[39m`
export const white = (str) => `\u001b[37m${str}\u001b[39m`
export const gray = (str) => `\u001b[90m${str}\u001b[39m`
export const grey = (str) => `\u001b[90m${str}\u001b[39m`

export const bgBlack = (str) => `\u001b[40m${str}\u001b[49m`
export const bgRed = (str) => `\u001b[41m${str}\u001b[49m`
export const bgGreen = (str) => `\u001b[42m${str}\u001b[49m`
export const bgYellow = (str) => `\u001b[43m${str}\u001b[49m`
export const bgBlue = (str) => `\u001b[44m${str}\u001b[49m`
export const bgMagenta = (str) => `\u001b[45m${str}\u001b[49m`
export const bgCyan = (str) => `\u001b[46m${str}\u001b[49m`
export const bgWhite = (str) => `\u001b[47m${str}\u001b[49m`

export default {
  reset,
  bold,
  dim,
  italic,
  underline,
  inverse,
  hidden,
  strikethrough,
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  gray,
  grey,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
}
