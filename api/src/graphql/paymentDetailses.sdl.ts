export const schema = gql`
  type PaymentDetails {
    id: String!
    amount: Int!
    provider: String!
    status: String!
    orders: OrderDetails
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    paymentDetailses: [PaymentDetails!]! @requireAuth
    paymentDetails(id: String!): PaymentDetails @requireAuth
  }

  input CreatePaymentDetailsInput {
    amount: Int!
    provider: String!
    status: String!
    modified_at: DateTime!
  }

  input UpdatePaymentDetailsInput {
    amount: Int
    provider: String
    status: String
    modified_at: DateTime
  }

  type Mutation {
    createPaymentDetails(input: CreatePaymentDetailsInput!): PaymentDetails!
      @requireAuth
    updatePaymentDetails(
      id: String!
      input: UpdatePaymentDetailsInput!
    ): PaymentDetails! @requireAuth
    deletePaymentDetails(id: String!): PaymentDetails! @requireAuth
  }
`
