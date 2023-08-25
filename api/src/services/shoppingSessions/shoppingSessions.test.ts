import type { ShoppingSession } from '@prisma/client'

import {
  shoppingSessions,
  shoppingSession,
  createShoppingSession,
  updateShoppingSession,
  deleteShoppingSession,
} from './shoppingSessions'
import type { StandardScenario } from './shoppingSessions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shoppingSessions', () => {
  scenario(
    'returns all shoppingSessions',
    async (scenario: StandardScenario) => {
      const result = await shoppingSessions()

      expect(result.length).toEqual(
        Object.keys(scenario.shoppingSession).length
      )
    }
  )

  scenario(
    'returns a single shoppingSession',
    async (scenario: StandardScenario) => {
      const result = await shoppingSession({
        id: scenario.shoppingSession.one.id,
      })

      expect(result).toEqual(scenario.shoppingSession.one)
    }
  )

  scenario('creates a shoppingSession', async (scenario: StandardScenario) => {
    const result = await createShoppingSession({
      input: {
        user_id: scenario.shoppingSession.two.user_id,
        total: 3891161.122527049,
        modified_at: '2023-08-21T23:48:01.375Z',
      },
    })

    expect(result.user_id).toEqual(scenario.shoppingSession.two.user_id)
    expect(result.total).toEqual(3891161.122527049)
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:48:01.375Z'))
  })

  scenario('updates a shoppingSession', async (scenario: StandardScenario) => {
    const original = (await shoppingSession({
      id: scenario.shoppingSession.one.id,
    })) as ShoppingSession
    const result = await updateShoppingSession({
      id: original.id,
      input: { total: 2086681.392378886 },
    })

    expect(result.total).toEqual(2086681.392378886)
  })

  scenario('deletes a shoppingSession', async (scenario: StandardScenario) => {
    const original = (await deleteShoppingSession({
      id: scenario.shoppingSession.one.id,
    })) as ShoppingSession
    const result = await shoppingSession({ id: original.id })

    expect(result).toEqual(null)
  })
})
