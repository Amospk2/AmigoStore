import type { Discount } from '@prisma/client'

import {
  discounts,
  discount,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} from './discounts'
import type { StandardScenario } from './discounts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('discounts', () => {
  scenario('returns all discounts', async (scenario: StandardScenario) => {
    const result = await discounts()

    expect(result.length).toEqual(Object.keys(scenario.discount).length)
  })

  scenario('returns a single discount', async (scenario: StandardScenario) => {
    const result = await discount({ id: scenario.discount.one.id })

    expect(result).toEqual(scenario.discount.one)
  })

  scenario('creates a discount', async () => {
    const result = await createDiscount({
      input: {
        name: 'String',
        desc: 'String',
        discount_percent: 3917759.0530574303,
        active: true,
        deleted_at: '2023-08-21T23:49:37.792Z',
        modified_at: '2023-08-21T23:49:37.792Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.desc).toEqual('String')
    expect(result.discount_percent).toEqual(3917759.05305743)
    expect(result.active).toEqual(true)
    expect(result.deleted_at).toEqual(new Date('2023-08-21T23:49:37.792Z'))
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:49:37.792Z'))
  })

  scenario('updates a discount', async (scenario: StandardScenario) => {
    const original = (await discount({
      id: scenario.discount.one.id,
    })) as Discount
    const result = await updateDiscount({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a discount', async (scenario: StandardScenario) => {
    const original = (await deleteDiscount({
      id: scenario.discount.one.id,
    })) as Discount
    const result = await discount({ id: original.id })

    expect(result).toEqual(null)
  })
})
