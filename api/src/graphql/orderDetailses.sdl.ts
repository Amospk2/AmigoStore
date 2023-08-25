export const schema = gql`
  type OrderDetails {
    id: String!
    user: User!
    user_id: String!
    payment_detail: PaymentDetails!
    payment_id: String!
    total: Float!
    OrderItems: [OrderItems]!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    orderDetailses: [OrderDetails!]! @requireAuth
    orderDetails(id: String!): OrderDetails @requireAuth
  }

  input CreateOrderDetailsInput {
    user_id: String!
    payment_id: String!
    total: Float!
    modified_at: DateTime!
  }

  input UpdateOrderDetailsInput {
    user_id: String
    payment_id: String
    total: Float
    modified_at: DateTime
  }

  type Mutation {
    createOrderDetails(input: CreateOrderDetailsInput!): OrderDetails!
      @requireAuth
    updateOrderDetails(
      id: String!
      input: UpdateOrderDetailsInput!
    ): OrderDetails! @requireAuth
    deleteOrderDetails(id: String!): OrderDetails! @requireAuth
  }
`
