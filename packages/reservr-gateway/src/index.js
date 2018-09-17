const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const db = require('reservr-repository')

const resolvers = require('./resolvers')
const requireGraphQL = require('./utilities/require-graphql-node')

const Schema = requireGraphQL.require('reservr-domain/entities/reservations/reservations')
const typeDefs = gql(Schema);
const context = async () => ({ db })
const mock = false

const server = new ApolloServer({ 
  typeDefs: gql(Schema),
  resolvers,
  context,
  mock 
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`
  
  🚀 Server ready at http://localhost:4000${server.graphqlPath}
  
`),
);