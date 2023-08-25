export const schema = gql`
  type OrderItems {
    id: String!
    order: OrderDetails!
    order_id: String!
    product: Product!
    product_id: String!
    quantity: Float!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    orderItemses: [OrderItems!]! @requireAuth
    orderItems(id: String!): OrderItems @requireAuth
  }

  input CreateOrderItemsInput {
    order_id: String!
    product_id: String!
    quantity: Float!
    modified_at: DateTime!
  }

  input UpdateOrderItemsInput {
    order_id: String
    product_id: String
    quantity: Float
    modified_at: DateTime
  }

  type Mutation {
    createOrderItems(input: CreateOrderItemsInput!): OrderItems! @requireAuth
    updateOrderItems(id: String!, input: UpdateOrderItemsInput!): OrderItems!
      @requireAuth
    deleteOrderItems(id: String!): OrderItems! @requireAuth
  }
`
