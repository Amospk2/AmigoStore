import type { Prisma, Discount } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DiscountCreateArgs>({
  discount: {
    one: {
      data: {
        name: 'String',
        desc: 'String',
        discount_percent: 5807158.648303407,
        active: true,
        deleted_at: '2023-08-21T23:49:37.885Z',
        modified_at: '2023-08-21T23:49:37.885Z',
      },
    },
    two: {
      data: {
        name: 'String',
        desc: 'String',
        discount_percent: 8908173.445540575,
        active: true,
        deleted_at: '2023-08-21T23:49:37.885Z',
        modified_at: '2023-08-21T23:49:37.885Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Discount, 'discount'>
