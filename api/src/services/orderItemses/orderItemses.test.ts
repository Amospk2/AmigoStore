import type { OrderItems } from '@prisma/client'

import {
  orderItemses,
  orderItems,
  createOrderItems,
  updateOrderItems,
  deleteOrderItems,
} from './orderItemses'
import type { StandardScenario } from './orderItemses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orderItemses', () => {
  scenario('returns all orderItemses', async (scenario: StandardScenario) => {
    const result = await orderItemses()

    expect(result.length).toEqual(Object.keys(scenario.orderItems).length)
  })

  scenario(
    'returns a single orderItems',
    async (scenario: StandardScenario) => {
      const result = await orderItems({ id: scenario.orderItems.one.id })

      expect(result).toEqual(scenario.orderItems.one)
    }
  )

  scenario('creates a orderItems', async (scenario: StandardScenario) => {
    const result = await createOrderItems({
      input: {
        order_id: scenario.orderItems.two.order_id,
        product_id: scenario.orderItems.two.product_id,
        quantity: 8357844.8595460085,
        modified_at: '2023-08-21T23:48:33.499Z',
      },
    })

    expect(result.order_id).toEqual(scenario.orderItems.two.order_id)
    expect(result.product_id).toEqual(scenario.orderItems.two.product_id)
    expect(result.quantity).toEqual(8357844.859546009)
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:48:33.499Z'))
  })

  scenario('updates a orderItems', async (scenario: StandardScenario) => {
    const original = (await orderItems({
      id: scenario.orderItems.one.id,
    })) as OrderItems
    const result = await updateOrderItems({
      id: original.id,
      input: { quantity: 5329478.682959907 },
    })

    expect(result.quantity).toEqual(5329478.682959907)
  })

  scenario('deletes a orderItems', async (scenario: StandardScenario) => {
    const original = (await deleteOrderItems({
      id: scenario.orderItems.one.id,
    })) as OrderItems
    const result = await orderItems({ id: original.id })

    expect(result).toEqual(null)
  })
})
