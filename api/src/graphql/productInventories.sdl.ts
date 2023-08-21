export const schema = gql`
  type ProductInventory {
    id: String!
    Product: [Product]!
    quantity: Int!
    deleted_at: DateTime!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    productInventories: [ProductInventory!]! @requireAuth
    productInventory(id: String!): ProductInventory @requireAuth
  }

  input CreateProductInventoryInput {
    quantity: Int!
    deleted_at: DateTime!
    modified_at: DateTime!
  }

  input UpdateProductInventoryInput {
    quantity: Int
    deleted_at: DateTime
    modified_at: DateTime
  }

  type Mutation {
    createProductInventory(
      input: CreateProductInventoryInput!
    ): ProductInventory! @requireAuth
    updateProductInventory(
      id: String!
      input: UpdateProductInventoryInput!
    ): ProductInventory! @requireAuth
    deleteProductInventory(id: String!): ProductInventory! @requireAuth
  }
`
