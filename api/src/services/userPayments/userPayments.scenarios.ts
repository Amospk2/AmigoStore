import type { Prisma, UserPayment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserPaymentCreateArgs>({
  userPayment: {
    one: {
      data: {
        payment_type: 'String',
        provider: 'String',
        account_no: 'String',
        expiry: 'String',
        modified_at: '2023-08-21T23:49:00.257Z',
        user: {
          create: {
            email: 'String2558947',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:49:00.257Z',
          },
        },
      },
    },
    two: {
      data: {
        payment_type: 'String',
        provider: 'String',
        account_no: 'String',
        expiry: 'String',
        modified_at: '2023-08-21T23:49:00.257Z',
        user: {
          create: {
            email: 'String8970196',
            first_name: 'String',
            last_name: 'String',
            modified_at: '2023-08-21T23:49:00.257Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserPayment, 'userPayment'>
