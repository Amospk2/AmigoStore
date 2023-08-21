export const schema = gql`
  type UserAddress {
    id: String!
    user: User!
    user_id: String!
    address_description: String!
    city: String!
    postal_code: String!
    country: String!
    phone: String!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    userAddresses: [UserAddress!]! @requireAuth
    userAddress(id: String!): UserAddress @requireAuth
  }

  input CreateUserAddressInput {
    user_id: String!
    address_description: String!
    city: String!
    postal_code: String!
    country: String!
    phone: String!
    modified_at: DateTime!
  }

  input UpdateUserAddressInput {
    user_id: String
    address_description: String
    city: String
    postal_code: String
    country: String
    phone: String
    modified_at: DateTime
  }

  type Mutation {
    createUserAddress(input: CreateUserAddressInput!): UserAddress! @requireAuth
    updateUserAddress(
      id: String!
      input: UpdateUserAddressInput!
    ): UserAddress! @requireAuth
    deleteUserAddress(id: String!): UserAddress! @requireAuth
  }
`
