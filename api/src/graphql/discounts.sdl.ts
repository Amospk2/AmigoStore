export const schema = gql`
  type Discount {
    id: String!
    Product: [Product]!
    name: String!
    desc: String!
    discount_percent: Float!
    active: Boolean!
    deleted_at: DateTime!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    discounts: [Discount!]! @requireAuth
    discount(id: String!): Discount @requireAuth
  }

  input CreateDiscountInput {
    name: String!
    desc: String!
    discount_percent: Float!
    active: Boolean!
    deleted_at: DateTime!
    modified_at: DateTime!
  }

  input UpdateDiscountInput {
    name: String
    desc: String
    discount_percent: Float
    active: Boolean
    deleted_at: DateTime
    modified_at: DateTime
  }

  type Mutation {
    createDiscount(input: CreateDiscountInput!): Discount! @requireAuth
    updateDiscount(id: String!, input: UpdateDiscountInput!): Discount!
      @requireAuth
    deleteDiscount(id: String!): Discount! @requireAuth
  }
`
