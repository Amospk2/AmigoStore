import type {
  QueryResolvers,
  MutationResolvers,
  CartItemRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const cartItems: QueryResolvers['cartItems'] = () => {
  return db.cartItem.findMany()
}

export const cartItem: QueryResolvers['cartItem'] = ({ id }) => {
  return db.cartItem.findUnique({
    where: { id },
  })
}

export const createCartItem: MutationResolvers['createCartItem'] = ({
  input,
}) => {
  return db.cartItem.create({
    data: input,
  })
}

export const updateCartItem: MutationResolvers['updateCartItem'] = ({
  id,
  input,
}) => {
  return db.cartItem.update({
    data: input,
    where: { id },
  })
}

export const deleteCartItem: MutationResolvers['deleteCartItem'] = ({ id }) => {
  return db.cartItem.delete({
    where: { id },
  })
}

export const CartItem: CartItemRelationResolvers = {
  session: (_obj, { root }) => {
    return db.cartItem.findUnique({ where: { id: root?.id } }).session()
  },
  product: (_obj, { root }) => {
    return db.cartItem.findUnique({ where: { id: root?.id } }).product()
  },
}
