const express = require('express')
var myMiddleware = {}

function LocoMiddlewre(req, res, next) {
    console.log('Loco')
    next()
}

myMiddleware.locoMiddlewre = LocoMiddlewre

module.exports = myMiddleware

