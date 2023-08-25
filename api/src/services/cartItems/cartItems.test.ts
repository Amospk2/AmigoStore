import type { CartItem } from '@prisma/client'

import {
  cartItems,
  cartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} from './cartItems'
import type { StandardScenario } from './cartItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cartItems', () => {
  scenario('returns all cartItems', async (scenario: StandardScenario) => {
    const result = await cartItems()

    expect(result.length).toEqual(Object.keys(scenario.cartItem).length)
  })

  scenario('returns a single cartItem', async (scenario: StandardScenario) => {
    const result = await cartItem({ id: scenario.cartItem.one.id })

    expect(result).toEqual(scenario.cartItem.one)
  })

  scenario('creates a cartItem', async (scenario: StandardScenario) => {
    const result = await createCartItem({
      input: {
        session_id: scenario.cartItem.two.session_id,
        product_id: scenario.cartItem.two.product_id,
        total: 868482.2793345304,
        modified_at: '2023-08-21T23:50:16.671Z',
      },
    })

    expect(result.session_id).toEqual(scenario.cartItem.two.session_id)
    expect(result.product_id).toEqual(scenario.cartItem.two.product_id)
    expect(result.total).toEqual(868482.2793345304)
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:50:16.671Z'))
  })

  scenario('updates a cartItem', async (scenario: StandardScenario) => {
    const original = (await cartItem({
      id: scenario.cartItem.one.id,
    })) as CartItem
    const result = await updateCartItem({
      id: original.id,
      input: { total: 42593.00011466574 },
    })

    expect(result.total).toEqual(42593.00011466574)
  })

  scenario('deletes a cartItem', async (scenario: StandardScenario) => {
    const original = (await deleteCartItem({
      id: scenario.cartItem.one.id,
    })) as CartItem
    const result = await cartItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
