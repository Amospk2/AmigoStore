export const schema = gql`
  type UserPayment {
    id: String!
    user: User!
    user_id: String!
    payment_type: String!
    provider: String!
    account_no: String!
    expiry: String!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    userPayments: [UserPayment!]! @requireAuth
    userPayment(id: String!): UserPayment @requireAuth
  }

  input CreateUserPaymentInput {
    user_id: String!
    payment_type: String!
    provider: String!
    account_no: String!
    expiry: String!
    modified_at: DateTime!
  }

  input UpdateUserPaymentInput {
    user_id: String
    payment_type: String
    provider: String
    account_no: String
    expiry: String
    modified_at: DateTime
  }

  type Mutation {
    createUserPayment(input: CreateUserPaymentInput!): UserPayment! @requireAuth
    updateUserPayment(
      id: String!
      input: UpdateUserPaymentInput!
    ): UserPayment! @requireAuth
    deleteUserPayment(id: String!): UserPayment! @requireAuth
  }
`
