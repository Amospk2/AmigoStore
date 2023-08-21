export const schema = gql`
  type ShoppingSession {
    id: String!
    user: User!
    user_id: String!
    total: Float!
    CartItem: [CartItem]!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    shoppingSessions: [ShoppingSession!]! @requireAuth
    shoppingSession(id: String!): ShoppingSession @requireAuth
  }

  input CreateShoppingSessionInput {
    user_id: String!
    total: Float!
    modified_at: DateTime!
  }

  input UpdateShoppingSessionInput {
    user_id: String
    total: Float
    modified_at: DateTime
  }

  type Mutation {
    createShoppingSession(input: CreateShoppingSessionInput!): ShoppingSession!
      @requireAuth
    updateShoppingSession(
      id: String!
      input: UpdateShoppingSessionInput!
    ): ShoppingSession! @requireAuth
    deleteShoppingSession(id: String!): ShoppingSession! @requireAuth
  }
`
