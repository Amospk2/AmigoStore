import type { ProductCategory } from '@prisma/client'

import {
  productCategories,
  productCategory,
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
} from './productCategories'
import type { StandardScenario } from './productCategories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('productCategories', () => {
  scenario(
    'returns all productCategories',
    async (scenario: StandardScenario) => {
      const result = await productCategories()

      expect(result.length).toEqual(
        Object.keys(scenario.productCategory).length
      )
    }
  )

  scenario(
    'returns a single productCategory',
    async (scenario: StandardScenario) => {
      const result = await productCategory({
        id: scenario.productCategory.one.id,
      })

      expect(result).toEqual(scenario.productCategory.one)
    }
  )

  scenario('creates a productCategory', async () => {
    const result = await createProductCategory({
      input: {
        name: 'String',
        desc: 'String',
        active: true,
        deleted_at: '2023-08-21T23:50:02.548Z',
        modified_at: '2023-08-21T23:50:02.548Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.desc).toEqual('String')
    expect(result.active).toEqual(true)
    expect(result.deleted_at).toEqual(new Date('2023-08-21T23:50:02.548Z'))
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:50:02.548Z'))
  })

  scenario('updates a productCategory', async (scenario: StandardScenario) => {
    const original = (await productCategory({
      id: scenario.productCategory.one.id,
    })) as ProductCategory
    const result = await updateProductCategory({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a productCategory', async (scenario: StandardScenario) => {
    const original = (await deleteProductCategory({
      id: scenario.productCategory.one.id,
    })) as ProductCategory
    const result = await productCategory({ id: original.id })

    expect(result).toEqual(null)
  })
})
