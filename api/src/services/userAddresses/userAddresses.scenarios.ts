import type { Prisma, UserAddress } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserAddressCreateArgs>({
  userAddress: {
    one: {
      data: {
        address_description: 'String',
        city: 'String',
        postal_code: 'String',
        country: 'String',
        phone: 'String',
        modified_at: '2023-08-21T23:47:43.549Z',
        user: {
          create: {
            email: 'String900970',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:47:43.549Z',
          },
        },
      },
    },
    two: {
      data: {
        address_description: 'String',
        city: 'String',
        postal_code: 'String',
        country: 'String',
        phone: 'String',
        modified_at: '2023-08-21T23:47:43.549Z',
        user: {
          create: {
            email: 'String9775402',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:47:43.550Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserAddress, 'userAddress'>
