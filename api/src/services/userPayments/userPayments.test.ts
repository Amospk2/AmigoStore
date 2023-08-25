import type { UserPayment } from '@prisma/client'

import {
  userPayments,
  userPayment,
  createUserPayment,
  updateUserPayment,
  deleteUserPayment,
} from './userPayments'
import type { StandardScenario } from './userPayments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userPayments', () => {
  scenario('returns all userPayments', async (scenario: StandardScenario) => {
    const result = await userPayments()

    expect(result.length).toEqual(Object.keys(scenario.userPayment).length)
  })

  scenario(
    'returns a single userPayment',
    async (scenario: StandardScenario) => {
      const result = await userPayment({ id: scenario.userPayment.one.id })

      expect(result).toEqual(scenario.userPayment.one)
    }
  )

  scenario('creates a userPayment', async (scenario: StandardScenario) => {
    const result = await createUserPayment({
      input: {
        user_id: scenario.userPayment.two.user_id,
        payment_type: 'String',
        provider: 'String',
        account_no: 'String',
        expiry: 'String',
        modified_at: '2023-08-21T23:49:00.133Z',
      },
    })

    expect(result.user_id).toEqual(scenario.userPayment.two.user_id)
    expect(result.payment_type).toEqual('String')
    expect(result.provider).toEqual('String')
    expect(result.account_no).toEqual('String')
    expect(result.expiry).toEqual('String')
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:49:00.133Z'))
  })

  scenario('updates a userPayment', async (scenario: StandardScenario) => {
    const original = (await userPayment({
      id: scenario.userPayment.one.id,
    })) as UserPayment
    const result = await updateUserPayment({
      id: original.id,
      input: { payment_type: 'String2' },
    })

    expect(result.payment_type).toEqual('String2')
  })

  scenario('deletes a userPayment', async (scenario: StandardScenario) => {
    const original = (await deleteUserPayment({
      id: scenario.userPayment.one.id,
    })) as UserPayment
    const result = await userPayment({ id: original.id })

    expect(result).toEqual(null)
  })
})
