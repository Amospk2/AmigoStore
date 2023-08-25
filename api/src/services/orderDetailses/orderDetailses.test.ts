import type { OrderDetails } from '@prisma/client'

import {
  orderDetailses,
  orderDetails,
  createOrderDetails,
  updateOrderDetails,
  deleteOrderDetails,
} from './orderDetailses'
import type { StandardScenario } from './orderDetailses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orderDetailses', () => {
  scenario('returns all orderDetailses', async (scenario: StandardScenario) => {
    const result = await orderDetailses()

    expect(result.length).toEqual(Object.keys(scenario.orderDetails).length)
  })

  scenario(
    'returns a single orderDetails',
    async (scenario: StandardScenario) => {
      const result = await orderDetails({ id: scenario.orderDetails.one.id })

      expect(result).toEqual(scenario.orderDetails.one)
    }
  )

  scenario('creates a orderDetails', async (scenario: StandardScenario) => {
    // OrderDetails criado no scenario, aqui apenas verifico se o teste foi
    // realmente criado e se os dados batem com os do scenario.

    const result = await orderDetails({ id: scenario.orderDetails.two.id })

    expect(result.user_id).toEqual(scenario.orderDetails.two.user_id)
    expect(result.payment_id).toEqual(scenario.orderDetails.two.payment_id)
    expect(result.total).toEqual(3980310.547519772)
  })

  scenario('updates a orderDetails', async (scenario: StandardScenario) => {
    const original = (await orderDetails({
      id: scenario.orderDetails.one.id,
    })) as OrderDetails
    const result = await updateOrderDetails({
      id: original.id,
      input: { total: 6449711.340751198 },
    })

    expect(result.total).toEqual(6449711.340751198)
  })

  scenario('deletes a orderDetails', async (scenario: StandardScenario) => {
    const original = (await deleteOrderDetails({
      id: scenario.orderDetails.one.id,
    })) as OrderDetails
    const result = await orderDetails({ id: original.id })

    expect(result).toEqual(null)
  })
})
