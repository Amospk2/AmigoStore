import type { Prisma, ProductInventory } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductInventoryCreateArgs>({
  productInventory: {
    one: {
      data: {
        quantity: 9757838,
        deleted_at: '2023-08-21T23:49:50.633Z',
        modified_at: '2023-08-21T23:49:50.633Z',
      },
    },
    two: {
      data: {
        quantity: 6382960,
        deleted_at: '2023-08-21T23:49:50.633Z',
        modified_at: '2023-08-21T23:49:50.633Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  ProductInventory,
  'productInventory'
>
