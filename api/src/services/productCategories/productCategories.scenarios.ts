import type { Prisma, ProductCategory } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCategoryCreateArgs>({
  productCategory: {
    one: {
      data: {
        name: 'String',
        desc: 'String',
        active: true,
        deleted_at: '2023-08-21T23:50:02.644Z',
        modified_at: '2023-08-21T23:50:02.644Z',
      },
    },
    two: {
      data: {
        name: 'String',
        desc: 'String',
        active: true,
        deleted_at: '2023-08-21T23:50:02.644Z',
        modified_at: '2023-08-21T23:50:02.644Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<ProductCategory, 'productCategory'>
