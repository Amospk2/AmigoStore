import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String2147228',
        first_name: 'String',
        last_name: 'String',
        modified_at: '2023-08-21T23:47:29.217Z',
      },
    },
    two: {
      data: {
        email: 'String1672385',
        first_name: 'String',
        last_name: 'String',
        modified_at: '2023-08-21T23:47:29.217Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
