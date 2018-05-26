const prism = require('markdown-it-prism')
var md = require('markdown-it')({
  html: true,
  linkify: true,
}).use(prism)

export function  renderMd(text){
  return md.render(text)
}