export const schema = gql`
  type CartItem {
    id: String!
    session: ShoppingSession!
    session_id: String!
    product: Product!
    product_id: String!
    total: Float!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    cartItems: [CartItem!]! @requireAuth
    cartItem(id: String!): CartItem @requireAuth
  }

  input CreateCartItemInput {
    session_id: String!
    product_id: String!
    total: Float!
    modified_at: DateTime!
  }

  input UpdateCartItemInput {
    session_id: String
    product_id: String
    total: Float
    modified_at: DateTime
  }

  type Mutation {
    createCartItem(input: CreateCartItemInput!): CartItem! @requireAuth
    updateCartItem(id: String!, input: UpdateCartItemInput!): CartItem!
      @requireAuth
    deleteCartItem(id: String!): CartItem! @requireAuth
  }
`
