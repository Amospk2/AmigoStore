import type {
  QueryResolvers,
  MutationResolvers,
  PaymentDetailsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const paymentDetailses: QueryResolvers['paymentDetailses'] = () => {
  return db.paymentDetails.findMany()
}

export const paymentDetails: QueryResolvers['paymentDetails'] = ({ id }) => {
  return db.paymentDetails.findUnique({
    where: { id },
  })
}

export const createPaymentDetails: MutationResolvers['createPaymentDetails'] =
  ({ input }) => {
    return db.paymentDetails.create({
      data: input,
    })
  }

export const updatePaymentDetails: MutationResolvers['updatePaymentDetails'] =
  ({ id, input }) => {
    return db.paymentDetails.update({
      data: input,
      where: { id },
    })
  }

export const deletePaymentDetails: MutationResolvers['deletePaymentDetails'] =
  ({ id }) => {
    return db.paymentDetails.delete({
      where: { id },
    })
  }

export const PaymentDetails: PaymentDetailsRelationResolvers = {
  orders: (_obj, { root }) => {
    return db.paymentDetails.findUnique({ where: { id: root?.id } }).orders()
  },
}
