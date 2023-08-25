import type { UserAddress } from '@prisma/client'

import {
  userAddresses,
  userAddress,
  createUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from './userAddresses'
import type { StandardScenario } from './userAddresses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userAddresses', () => {
  scenario('returns all userAddresses', async (scenario: StandardScenario) => {
    const result = await userAddresses()

    expect(result.length).toEqual(Object.keys(scenario.userAddress).length)
  })

  scenario(
    'returns a single userAddress',
    async (scenario: StandardScenario) => {
      const result = await userAddress({ id: scenario.userAddress.one.id })

      expect(result).toEqual(scenario.userAddress.one)
    }
  )

  scenario('creates a userAddress', async (scenario: StandardScenario) => {
    const result = await createUserAddress({
      input: {
        user_id: scenario.userAddress.two.user_id,
        address_description: 'String',
        city: 'String',
        postal_code: 'String',
        country: 'String',
        phone: 'String',
        modified_at: '2023-08-21T23:47:43.460Z',
      },
    })

    expect(result.user_id).toEqual(scenario.userAddress.two.user_id)
    expect(result.address_description).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.postal_code).toEqual('String')
    expect(result.country).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:47:43.460Z'))
  })

  scenario('updates a userAddress', async (scenario: StandardScenario) => {
    const original = (await userAddress({
      id: scenario.userAddress.one.id,
    })) as UserAddress
    const result = await updateUserAddress({
      id: original.id,
      input: { address_description: 'String2' },
    })

    expect(result.address_description).toEqual('String2')
  })

  scenario('deletes a userAddress', async (scenario: StandardScenario) => {
    const original = (await deleteUserAddress({
      id: scenario.userAddress.one.id,
    })) as UserAddress
    const result = await userAddress({ id: original.id })

    expect(result).toEqual(null)
  })
})
