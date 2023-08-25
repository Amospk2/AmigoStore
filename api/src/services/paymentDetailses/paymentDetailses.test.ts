import type { PaymentDetails } from '@prisma/client'

import {
  paymentDetailses,
  paymentDetails,
  createPaymentDetails,
  updatePaymentDetails,
  deletePaymentDetails,
} from './paymentDetailses'
import type { StandardScenario } from './paymentDetailses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('paymentDetailses', () => {
  scenario(
    'returns all paymentDetailses',
    async (scenario: StandardScenario) => {
      const result = await paymentDetailses()

      expect(result.length).toEqual(Object.keys(scenario.paymentDetails).length)
    }
  )

  scenario(
    'returns a single paymentDetails',
    async (scenario: StandardScenario) => {
      const result = await paymentDetails({
        id: scenario.paymentDetails.one.id,
      })

      expect(result).toEqual(scenario.paymentDetails.one)
    }
  )

  scenario('creates a paymentDetails', async () => {
    const result = await createPaymentDetails({
      input: {
        amount: 5619023,
        provider: 'String',
        status: 'String',
        modified_at: '2023-08-21T23:49:23.451Z',
      },
    })

    expect(result.amount).toEqual(5619023)
    expect(result.provider).toEqual('String')
    expect(result.status).toEqual('String')
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:49:23.451Z'))
  })

  scenario('updates a paymentDetails', async (scenario: StandardScenario) => {
    const original = (await paymentDetails({
      id: scenario.paymentDetails.one.id,
    })) as PaymentDetails
    const result = await updatePaymentDetails({
      id: original.id,
      input: { amount: 5149754 },
    })

    expect(result.amount).toEqual(5149754)
  })

  scenario('deletes a paymentDetails', async (scenario: StandardScenario) => {
    const original = (await deletePaymentDetails({
      id: scenario.paymentDetails.one.id,
    })) as PaymentDetails
    const result = await paymentDetails({ id: original.id })

    expect(result).toEqual(null)
  })
})
