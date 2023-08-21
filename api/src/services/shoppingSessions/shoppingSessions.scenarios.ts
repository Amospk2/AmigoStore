import type { Prisma, ShoppingSession } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ShoppingSessionCreateArgs>({
  shoppingSession: {
    one: {
      data: {
        total: 5013839.0637982115,
        modified_at: '2023-08-21T23:48:01.480Z',
        user: {
          create: {
            email: 'String3999576',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:48:01.480Z',
          },
        },
      },
    },
    two: {
      data: {
        total: 7546479.695158293,
        modified_at: '2023-08-21T23:48:01.480Z',
        user: {
          create: {
            email: 'String2044508',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:48:01.480Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ShoppingSession, 'shoppingSession'>
