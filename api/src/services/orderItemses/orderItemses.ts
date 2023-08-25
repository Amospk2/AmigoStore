import type {
  QueryResolvers,
  MutationResolvers,
  OrderItemsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const orderItemses: QueryResolvers['orderItemses'] = () => {
  return db.orderItems.findMany()
}

export const orderItems: QueryResolvers['orderItems'] = ({ id }) => {
  return db.orderItems.findUnique({
    where: { id },
  })
}

export const createOrderItems: MutationResolvers['createOrderItems'] = ({
  input,
}) => {
  return db.orderItems.create({
    data: input,
  })
}

export const updateOrderItems: MutationResolvers['updateOrderItems'] = ({
  id,
  input,
}) => {
  return db.orderItems.update({
    data: input,
    where: { id },
  })
}

export const deleteOrderItems: MutationResolvers['deleteOrderItems'] = ({
  id,
}) => {
  return db.orderItems.delete({
    where: { id },
  })
}

export const OrderItems: OrderItemsRelationResolvers = {
  order: (_obj, { root }) => {
    return db.orderItems.findUnique({ where: { id: root?.id } }).order()
  },
  product: (_obj, { root }) => {
    return db.orderItems.findUnique({ where: { id: root?.id } }).product()
  },
}
