const { extendResolversFromInterfaces } = require('apollo-server-express')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
// const resolvers = require('./resolvers')

module.exports = { typeDefs, resolvers }