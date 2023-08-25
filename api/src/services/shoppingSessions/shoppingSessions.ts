import type {
  QueryResolvers,
  MutationResolvers,
  ShoppingSessionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const shoppingSessions: QueryResolvers['shoppingSessions'] = () => {
  return db.shoppingSession.findMany()
}

export const shoppingSession: QueryResolvers['shoppingSession'] = ({ id }) => {
  return db.shoppingSession.findUnique({
    where: { id },
  })
}

export const createShoppingSession: MutationResolvers['createShoppingSession'] =
  ({ input }) => {
    return db.shoppingSession.create({
      data: input,
    })
  }

export const updateShoppingSession: MutationResolvers['updateShoppingSession'] =
  ({ id, input }) => {
    return db.shoppingSession.update({
      data: input,
      where: { id },
    })
  }

export const deleteShoppingSession: MutationResolvers['deleteShoppingSession'] =
  ({ id }) => {
    return db.shoppingSession.delete({
      where: { id },
    })
  }

export const ShoppingSession: ShoppingSessionRelationResolvers = {
  user: (_obj, { root }) => {
    return db.shoppingSession.findUnique({ where: { id: root?.id } }).user()
  },
  CartItem: (_obj, { root }) => {
    return db.shoppingSession.findUnique({ where: { id: root?.id } }).CartItem()
  },
}
