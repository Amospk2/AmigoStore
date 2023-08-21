import type {
  QueryResolvers,
  MutationResolvers,
  OrderDetailsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const orderDetailses: QueryResolvers['orderDetailses'] = () => {
  return db.orderDetails.findMany()
}

export const orderDetails: QueryResolvers['orderDetails'] = ({ id }) => {
  return db.orderDetails.findUnique({
    where: { id },
  })
}

export const createOrderDetails: MutationResolvers['createOrderDetails'] = ({
  input,
}) => {
  return db.orderDetails.create({
    data: input,
  })
}

export const updateOrderDetails: MutationResolvers['updateOrderDetails'] = ({
  id,
  input,
}) => {
  return db.orderDetails.update({
    data: input,
    where: { id },
  })
}

export const deleteOrderDetails: MutationResolvers['deleteOrderDetails'] = ({
  id,
}) => {
  return db.orderDetails.delete({
    where: { id },
  })
}

export const OrderDetails: OrderDetailsRelationResolvers = {
  user: (_obj, { root }) => {
    return db.orderDetails.findUnique({ where: { id: root?.id } }).user()
  },
  payment_detail: (_obj, { root }) => {
    return db.orderDetails
      .findUnique({ where: { id: root?.id } })
      .payment_detail()
  },
  OrderItems: (_obj, { root }) => {
    return db.orderDetails.findUnique({ where: { id: root?.id } }).OrderItems()
  },
}
