import type {
  QueryResolvers,
  MutationResolvers,
  DiscountRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const discounts: QueryResolvers['discounts'] = () => {
  return db.discount.findMany()
}

export const discount: QueryResolvers['discount'] = ({ id }) => {
  return db.discount.findUnique({
    where: { id },
  })
}

export const createDiscount: MutationResolvers['createDiscount'] = ({
  input,
}) => {
  return db.discount.create({
    data: input,
  })
}

export const updateDiscount: MutationResolvers['updateDiscount'] = ({
  id,
  input,
}) => {
  return db.discount.update({
    data: input,
    where: { id },
  })
}

export const deleteDiscount: MutationResolvers['deleteDiscount'] = ({ id }) => {
  return db.discount.delete({
    where: { id },
  })
}

export const Discount: DiscountRelationResolvers = {
  Product: (_obj, { root }) => {
    return db.discount.findUnique({ where: { id: root?.id } }).Product()
  },
}
