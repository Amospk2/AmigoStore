export const schema = gql`
  type Product {
    id: String!
    category: ProductCategory!
    category_id: String!
    inventory: ProductInventory!
    inventory_id: String!
    discount: Discount!
    discount_id: String!
    name: String!
    desc: String!
    SKU: String!
    price: String!
    active: Boolean!
    OrderItems: [OrderItems]!
    CartItem: [CartItem]!
    deleted_at: DateTime!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: String!): Product @requireAuth
  }

  input CreateProductInput {
    category_id: String!
    inventory_id: String!
    discount_id: String!
    name: String!
    desc: String!
    SKU: String!
    price: String!
    active: Boolean!
    deleted_at: DateTime!
    modified_at: DateTime!
  }

  input UpdateProductInput {
    category_id: String
    inventory_id: String
    discount_id: String
    name: String
    desc: String
    SKU: String
    price: String
    active: Boolean
    deleted_at: DateTime
    modified_at: DateTime
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: String!, input: UpdateProductInput!): Product!
      @requireAuth
    deleteProduct(id: String!): Product! @requireAuth
  }
`
