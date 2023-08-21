export const schema = gql`
  type User {
    id: String!
    email: String!
    first_name: String!
    last_name: String!
    fullName: String
    Adresses: [UserAddress]!
    Payments: [UserPayment]!
    Orders: [OrderDetails]!
    Session: [ShoppingSession]!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    first_name: String!
    last_name: String!
    modified_at: DateTime!
  }

  input UpdateUserInput {
    email: String
    first_name: String
    last_name: String
    modified_at: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
