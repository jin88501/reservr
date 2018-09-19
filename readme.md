# Reservr Demo App

## Setup

### Monorepo Disclosure

This project uses a monorepo setup using `lerna` and `yarn`. As such, you will need yarn to install this project.


### Install

```bash
yarn
```

### Start

Start the server first, then run the respective simulator.

```bash
yarn dev:cloud
```

```bash
yarn dev:ios
```

## Packages

### reservr-domain

Core business logic (including GraphQL types and Flow types). Can be imported by both server and client code.

### reservr-cloud-gateway

Server endpoint. Currently has REST and GraphQL endpoints. Later could be abstracted to microservices.

### reservr-cloud-repository

Database. Currently made with Sequelize.

### reversr-react

Reusable React-Native component library.

### reversr-react-reservations-scene

Primary app business logic.

### ReservrReactNative

React Native baseline that points to scenes. This makes it easy to rebase to new version of React Native.

## Architecture Principles

This application attempts to follow the following principles:

- **Modules First**: Try to keep projects and client tech stacks small. This way, everything from trying new tech stacks to rebasing becomes easier.
- **Interface Focused Abstractions**: Try to design around minimally leaky abstractions. This way, it is easier to change internals later. For example, even though `reservr-gateway` doesn't yet proxy to other microservices, by having apps point to the gateway, it becomes easier for server devs to optimize on their own accord.
- **Use Functions + Higher Order Components**: Almost this entire app is written with functional components (using recompose).
- **Use Generic UI Components When Piping Business Logic**: Scene modules, where UI meets other side effects like GraphQL, should only contain UI components that are generic by nature, thus making it easier to update the design system later.
- **Separate Complext React Components**: While this is already done with `reservr-react-reservations-scene`, this logic can be applied to other complex components, like complex Graphs and Tables. By keeping complex components with complex props out of `reservr-react`, `reservr-react` can have a longer shelf life.
- **Unify Modules With Basic Domain Knowledge**: `reserver-domain` contains general business logic. As such, it is imported by most modules within this code base. Currently, it has types and graphql definitions. But it can also be expanded to include brand styles and functional reducers for interacting with different data structures.

## Progress

The following progress list items potentially needed to release MVP to Test Users.

### Cloud

- [x] GraphQL Types
- [x] GraphQL Endpoint
- [x] GraphQL Resolvers
- [x] REST Endpoint
- [x] Sequelize Database
- [ ] Add tests
- [ ] Add data validation for REST
- [ ] Add more error handling
- [ ] Add production logging

### App

- [x] iOS Support
- [x] Android Support
- [x] Apollo Client
- [x] Recompose Integration (for functional state management)
- [x] Flow Types
- [x] Decouple Core Components to Separate Modules
- [x] Reservations Results Screen
- [x] Add Reservation Screen
- [x] Add Reservations Updates DB
- [x] Add Reservations Updates UI
- [ ] Transition Animations
- [ ] Add more native components with `native-base`
- [ ] Brand Assets Update
- [ ] Add more in depth state management (Redux/RxJS)
- [ ] Add Tests
- [ ] Add more error handling
- [ ] Add production logging

### Chores

- [x] Monorepo Setup With React Native + Node
- [ ] Update Docs
- [ ] Add CICD process (fastlane?)
- [ ] Publish to TestFlight/HockeyKit for Test Users