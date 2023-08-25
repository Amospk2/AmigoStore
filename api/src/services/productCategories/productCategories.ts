import type {
  QueryResolvers,
  MutationResolvers,
  ProductCategoryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const productCategories: QueryResolvers['productCategories'] = () => {
  return db.productCategory.findMany()
}

export const productCategory: QueryResolvers['productCategory'] = ({ id }) => {
  return db.productCategory.findUnique({
    where: { id },
  })
}

export const createProductCategory: MutationResolvers['createProductCategory'] =
  ({ input }) => {
    return db.productCategory.create({
      data: input,
    })
  }

export const updateProductCategory: MutationResolvers['updateProductCategory'] =
  ({ id, input }) => {
    return db.productCategory.update({
      data: input,
      where: { id },
    })
  }

export const deleteProductCategory: MutationResolvers['deleteProductCategory'] =
  ({ id }) => {
    return db.productCategory.delete({
      where: { id },
    })
  }

export const ProductCategory: ProductCategoryRelationResolvers = {
  Product: (_obj, { root }) => {
    return db.productCategory.findUnique({ where: { id: root?.id } }).Product()
  },
}
