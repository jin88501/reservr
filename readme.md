# Reservr Demo App

## Install

```bash
yarn
```

## Start

Start the server first, then run the respective simulator.

### Server

```bash
yarn gateway
```

### iOS Simulator

```bash
yarn run:ios
```

### Packages

#### reservr-domain

Core business logic (including GraphQL types and Flow types). Can be imported by both server and client code.

#### reservr-gateway

Server endpoint. Currently has REST and GraphQL endpoints. Later could be abstracted to microservices.

#### reservr-repository

Database. Currently made with Sequelize.

#### ReservrReactNative

React Native app with client logic.

### Progress

#### Server

- [x] GraphQL Types
- [x] GraphQL Endpoint
- [x] GraphQL Resolvers
- [x] REST Endpoint
- [x] Sequelize Database

### React Native

- [x] Apollo Client
- [x] Recompose Integration (for functional state management)
- [x] Flow Types
- [x] Reservations Results Screen
- [ ] Reservation Submission Screen
- [ ] Transition Animations
- [ ] Styling Updates
- [ ] Brand Assets Update
- [ ] Decouple Core Components to Separate Module

#### DevOps

- [] Monorepo Setup With React Native + Node
