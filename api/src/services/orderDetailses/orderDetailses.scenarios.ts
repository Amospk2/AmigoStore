import type { Prisma, OrderDetails } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrderDetailsCreateArgs>({
  orderDetails: {
    
    one: {
      data: {
        total: 4262481.060156617,
        modified_at: '2023-08-21T23:48:49.331Z',
        user: {
          create: {
            email: 'String1579858',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:48:49.331Z',
          },
        },
        payment_detail: {
          create: {
            amount: 8077379,
            provider: 'String',
            status: 'String',
            modified_at: '2023-08-21T23:48:49.331Z',
          },
        },
      },
    },
    two: {
      data: {
        total: 3980310.547519772,
        modified_at: '2023-08-21T23:48:49.331Z',
        user: {
          create: {
            email: 'String5571115',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:48:49.331Z',
          },
        },
        payment_detail: {
          create: {
            amount: 6246038,
            provider: 'String',
            status: 'String',
            modified_at: '2023-08-21T23:48:49.331Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<OrderDetails, 'orderDetails'>
