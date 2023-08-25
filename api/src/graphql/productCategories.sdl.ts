export const schema = gql`
  type ProductCategory {
    id: String!
    Product: [Product]!
    name: String!
    desc: String!
    active: Boolean!
    deleted_at: DateTime!
    modified_at: DateTime!
    createdAt: DateTime!
  }

  type Query {
    productCategories: [ProductCategory!]! @requireAuth
    productCategory(id: String!): ProductCategory @requireAuth
  }

  input CreateProductCategoryInput {
    name: String!
    desc: String!
    active: Boolean!
    deleted_at: DateTime!
    modified_at: DateTime!
  }

  input UpdateProductCategoryInput {
    name: String
    desc: String
    active: Boolean
    deleted_at: DateTime
    modified_at: DateTime
  }

  type Mutation {
    createProductCategory(input: CreateProductCategoryInput!): ProductCategory!
      @requireAuth
    updateProductCategory(
      id: String!
      input: UpdateProductCategoryInput!
    ): ProductCategory! @requireAuth
    deleteProductCategory(id: String!): ProductCategory! @requireAuth
  }
`
