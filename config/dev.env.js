'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_CONFIG: `{
    apiKey: 'AIzaSyAC26X8bWaMmZJ-v5yr6NsJaLdXkOBDGIs',
    authDomain: 'was-today-better-dev.firebaseapp.com',
    databaseURL: 'https://was-today-better-dev.firebaseio.com',
    projectId: 'was-today-better-dev',
    storageBucket: 'was-today-better-dev.appspot.com',
    messagingSenderId: '110009410201'
  }`
})
