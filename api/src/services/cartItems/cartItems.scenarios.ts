import type { Prisma, CartItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CartItemCreateArgs>({
  cartItem: {
    one: {
      data: {
        total: 6835310.090346849,
        modified_at: '2023-08-21T23:50:17.170Z',
        session: {
          create: {
            total: 1214515.3761722406,
            modified_at: '2023-08-21T23:50:17.170Z',
            user: {
              create: {
                email: 'String4504342',
                first_name: 'String',
                last_name: 'String',
                modified_at: '2023-08-21T23:50:17.170Z',
              },
            },
          },
        },
        product: {
          create: {
            name: 'String',
            desc: 'String',
            SKU: 'String',
            price: 'String',
            active: true,
            deleted_at: '2023-08-21T23:50:17.170Z',
            modified_at: '2023-08-21T23:50:17.170Z',
            category: {
              create: {
                name: 'String',
                desc: 'String',
                active: true,
                deleted_at: '2023-08-21T23:50:17.170Z',
                modified_at: '2023-08-21T23:50:17.170Z',
              },
            },
            inventory: {
              create: {
                quantity: 6793822,
                deleted_at: '2023-08-21T23:50:17.170Z',
                modified_at: '2023-08-21T23:50:17.170Z',
              },
            },
            discount: {
              create: {
                name: 'String',
                desc: 'String',
                discount_percent: 2485127.9690743387,
                active: true,
                deleted_at: '2023-08-21T23:50:17.170Z',
                modified_at: '2023-08-21T23:50:17.170Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        total: 2586356.767662168,
        modified_at: '2023-08-21T23:50:17.170Z',
        session: {
          create: {
            total: 890117.5739059197,
            modified_at: '2023-08-21T23:50:17.170Z',
            user: {
              create: {
                email: 'String2734860',
                first_name: 'String',
                last_name: 'String',
                modified_at: '2023-08-21T23:50:17.170Z',
              },
            },
          },
        },
        product: {
          create: {
            name: 'String',
            desc: 'String',
            SKU: 'String',
            price: 'String',
            active: true,
            deleted_at: '2023-08-21T23:50:17.170Z',
            modified_at: '2023-08-21T23:50:17.170Z',
            category: {
              create: {
                name: 'String',
                desc: 'String',
                active: true,
                deleted_at: '2023-08-21T23:50:17.170Z',
                modified_at: '2023-08-21T23:50:17.170Z',
              },
            },
            inventory: {
              create: {
                quantity: 412404,
                deleted_at: '2023-08-21T23:50:17.170Z',
                modified_at: '2023-08-21T23:50:17.170Z',
              },
            },
            discount: {
              create: {
                name: 'String',
                desc: 'String',
                discount_percent: 8233290.254921408,
                active: true,
                deleted_at: '2023-08-21T23:50:17.171Z',
                modified_at: '2023-08-21T23:50:17.171Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CartItem, 'cartItem'>
