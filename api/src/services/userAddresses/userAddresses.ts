import type {
  QueryResolvers,
  MutationResolvers,
  UserAddressRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userAddresses: QueryResolvers['userAddresses'] = () => {
  return db.userAddress.findMany()
}

export const userAddress: QueryResolvers['userAddress'] = ({ id }) => {
  return db.userAddress.findUnique({
    where: { id },
  })
}

export const createUserAddress: MutationResolvers['createUserAddress'] = ({
  input,
}) => {
  return db.userAddress.create({
    data: input,
  })
}

export const updateUserAddress: MutationResolvers['updateUserAddress'] = ({
  id,
  input,
}) => {
  return db.userAddress.update({
    data: input,
    where: { id },
  })
}

export const deleteUserAddress: MutationResolvers['deleteUserAddress'] = ({
  id,
}) => {
  return db.userAddress.delete({
    where: { id },
  })
}

export const UserAddress: UserAddressRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userAddress.findUnique({ where: { id: root?.id } }).user()
  },
}
