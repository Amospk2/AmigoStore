import type { Product } from '@prisma/client'

import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products'
import type { StandardScenario } from './products.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('products', () => {
  scenario('returns all products', async (scenario: StandardScenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })

  scenario('returns a single product', async (scenario: StandardScenario) => {
    const result = await product({ id: scenario.product.one.id })

    expect(result).toEqual(scenario.product.one)
  })

  scenario('creates a product', async (scenario: StandardScenario) => {
    const result = await createProduct({
      input: {
        category_id: scenario.product.two.category_id,
        inventory_id: scenario.product.two.inventory_id,
        discount_id: scenario.product.two.discount_id,
        name: 'String',
        desc: 'String',
        SKU: 'String',
        price: 'String',
        active: true,
        deleted_at: '2023-08-21T23:50:30.213Z',
        modified_at: '2023-08-21T23:50:30.213Z',
      },
    })

    expect(result.category_id).toEqual(scenario.product.two.category_id)
    expect(result.inventory_id).toEqual(scenario.product.two.inventory_id)
    expect(result.discount_id).toEqual(scenario.product.two.discount_id)
    expect(result.name).toEqual('String')
    expect(result.desc).toEqual('String')
    expect(result.SKU).toEqual('String')
    expect(result.price).toEqual('String')
    expect(result.active).toEqual(true)
    expect(result.deleted_at).toEqual(new Date('2023-08-21T23:50:30.213Z'))
    expect(result.modified_at).toEqual(new Date('2023-08-21T23:50:30.213Z'))
  })

  scenario('updates a product', async (scenario: StandardScenario) => {
    const original = (await product({ id: scenario.product.one.id })) as Product
    const result = await updateProduct({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a product', async (scenario: StandardScenario) => {
    const original = (await deleteProduct({
      id: scenario.product.one.id,
    })) as Product
    const result = await product({ id: original.id })

    expect(result).toEqual(null)
  })
})
