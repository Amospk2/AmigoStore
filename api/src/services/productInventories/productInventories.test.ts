import type { ProductInventory } from '@prisma/client'

import {
  productInventories,
  productInventory,
  createProductInventory,
  updateProductInventory,
  deleteProductInventory,
} from './productInventories'
import type { StandardScenario } from './productInventories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('productInventories', () => {
  scenario(
    'returns all productInventories',
    async (scenario: StandardScenario) => {
      const result = await productInventories()

      expect(result.length).toEqual(
        Object.keys(scenario.productInventory).length
      )
    }
  )

  scenario(
    'returns a single productInventory',
    async (scenario: StandardScenario) => {
      const result = await productInventory({
        id: scenario.productInventory.one.id,
      })

      expect(result).toEqual(scenario.productInventory.one)
    }
  )

  scenario('creates a productInventory', async () => {
    const result = await createProductInventory({
      input: {
        quantity: 4503330,
        deleted_at: '2023-08-21T23:49:50.568Z',
        modified_at: '2023-08-21T23:49:50.568Z',
      },
    })

    expect(result.quantity).toEqual(4503330)
    expect(result.deleted_at).toEqual(new Date('2023-08-21T23:49:50.568Z'))
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:49:50.568Z'))
  })

  scenario('updates a productInventory', async (scenario: StandardScenario) => {
    const original = (await productInventory({
      id: scenario.productInventory.one.id,
    })) as ProductInventory
    const result = await updateProductInventory({
      id: original.id,
      input: { quantity: 1332738 },
    })

    expect(result.quantity).toEqual(1332738)
  })

  scenario('deletes a productInventory', async (scenario: StandardScenario) => {
    const original = (await deleteProductInventory({
      id: scenario.productInventory.one.id,
    })) as ProductInventory
    const result = await productInventory({ id: original.id })

    expect(result).toEqual(null)
  })
})
