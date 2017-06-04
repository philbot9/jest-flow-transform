'use strict'
var flowRemoveTypes = require('flow-remove-types')

module.exports = {
  process: function (src, filename) {
    return flowRemoveTypes(src).toString()
  }
}
