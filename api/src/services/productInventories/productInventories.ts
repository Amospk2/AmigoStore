import type {
  QueryResolvers,
  MutationResolvers,
  ProductInventoryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const productInventories: QueryResolvers['productInventories'] = () => {
  return db.productInventory.findMany()
}

export const productInventory: QueryResolvers['productInventory'] = ({
  id,
}) => {
  return db.productInventory.findUnique({
    where: { id },
  })
}

export const createProductInventory: MutationResolvers['createProductInventory'] =
  ({ input }) => {
    return db.productInventory.create({
      data: input,
    })
  }

export const updateProductInventory: MutationResolvers['updateProductInventory'] =
  ({ id, input }) => {
    return db.productInventory.update({
      data: input,
      where: { id },
    })
  }

export const deleteProductInventory: MutationResolvers['deleteProductInventory'] =
  ({ id }) => {
    return db.productInventory.delete({
      where: { id },
    })
  }

export const ProductInventory: ProductInventoryRelationResolvers = {
  Product: (_obj, { root }) => {
    return db.productInventory.findUnique({ where: { id: root?.id } }).Product()
  },
}
