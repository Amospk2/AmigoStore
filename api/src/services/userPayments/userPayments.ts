import type {
  QueryResolvers,
  MutationResolvers,
  UserPaymentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userPayments: QueryResolvers['userPayments'] = () => {
  return db.userPayment.findMany()
}

export const userPayment: QueryResolvers['userPayment'] = ({ id }) => {
  return db.userPayment.findUnique({
    where: { id },
  })
}

export const createUserPayment: MutationResolvers['createUserPayment'] = ({
  input,
}) => {
  return db.userPayment.create({
    data: input,
  })
}

export const updateUserPayment: MutationResolvers['updateUserPayment'] = ({
  id,
  input,
}) => {
  return db.userPayment.update({
    data: input,
    where: { id },
  })
}

export const deleteUserPayment: MutationResolvers['deleteUserPayment'] = ({
  id,
}) => {
  return db.userPayment.delete({
    where: { id },
  })
}

export const UserPayment: UserPaymentRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userPayment.findUnique({ where: { id: root?.id } }).user()
  },
}
