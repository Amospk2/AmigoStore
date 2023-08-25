import type { Prisma, PaymentDetails } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PaymentDetailsCreateArgs>({
  paymentDetails: {
    one: {
      data: {
        amount: 4947272,
        provider: 'String',
        status: 'String',
        modified_at: '2023-08-21T23:49:23.524Z',
      },
    },
    two: {
      data: {
        amount: 9778232,
        provider: 'String',
        status: 'String',
        modified_at: '2023-08-21T23:49:23.524Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<PaymentDetails, 'paymentDetails'>
