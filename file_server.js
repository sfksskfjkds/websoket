const http = require('http');
const fs = require('fs')
const path = require('path')
const url = require('url')

let root = path.resolve(process.argv[2] || '.')