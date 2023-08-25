import type { Prisma, OrderItems } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrderItemsCreateArgs>({
  orderItems: {
    one: {
      data: {
        quantity: 4437265.37375511,
        modified_at: '2023-08-21T23:48:34.106Z',
        order: {
          create: {
            total: 1659171.5473684121,
            modified_at: '2023-08-21T23:48:34.106Z',
            user: {
              create: {
                email: 'String3138951',
                first_name: 'String',
                last_name: 'String',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
            payment_detail: {
              create: {
                amount: 9853408,
                provider: 'String',
                status: 'String',
                modified_at: '2023-08-21T23:48:34.106Z',
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
            deleted_at: '2023-08-21T23:48:34.106Z',
            modified_at: '2023-08-21T23:48:34.106Z',
            category: {
              create: {
                name: 'String',
                desc: 'String',
                active: true,
                deleted_at: '2023-08-21T23:48:34.106Z',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
            inventory: {
              create: {
                quantity: 9754965,
                deleted_at: '2023-08-21T23:48:34.106Z',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
            discount: {
              create: {
                name: 'String',
                desc: 'String',
                discount_percent: 2200442.636566826,
                active: true,
                deleted_at: '2023-08-21T23:48:34.106Z',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        quantity: 8898602.546136608,
        modified_at: '2023-08-21T23:48:34.106Z',
        order: {
          create: {
            total: 7309236.421563832,
            modified_at: '2023-08-21T23:48:34.106Z',
            user: {
              create: {
                email: 'String6427819',
                first_name: 'String',
                last_name: 'String',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
            payment_detail: {
              create: {
                amount: 5386700,
                provider: 'String',
                status: 'String',
                modified_at: '2023-08-21T23:48:34.106Z',
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
            deleted_at: '2023-08-21T23:48:34.106Z',
            modified_at: '2023-08-21T23:48:34.106Z',
            category: {
              create: {
                name: 'String',
                desc: 'String',
                active: true,
                deleted_at: '2023-08-21T23:48:34.106Z',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
            inventory: {
              create: {
                quantity: 4333559,
                deleted_at: '2023-08-21T23:48:34.106Z',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
            discount: {
              create: {
                name: 'String',
                desc: 'String',
                discount_percent: 9728963.635853918,
                active: true,
                deleted_at: '2023-08-21T23:48:34.106Z',
                modified_at: '2023-08-21T23:48:34.106Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<OrderItems, 'orderItems'>
