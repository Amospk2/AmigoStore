import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        name: 'String',
        desc: 'String',
        SKU: 'String',
        price: 'String',
        active: true,
        deleted_at: '2023-08-21T23:50:30.276Z',
        modified_at: '2023-08-21T23:50:30.276Z',
        category: {
          create: {
            name: 'String',
            desc: 'String',
            active: true,
            deleted_at: '2023-08-21T23:50:30.276Z',
            modified_at: '2023-08-21T23:50:30.276Z',
          },
        },
        inventory: {
          create: {
            quantity: 9884748,
            deleted_at: '2023-08-21T23:50:30.276Z',
            modified_at: '2023-08-21T23:50:30.276Z',
          },
        },
        discount: {
          create: {
            name: 'String',
            desc: 'String',
            discount_percent: 204666.5570142947,
            active: true,
            deleted_at: '2023-08-21T23:50:30.276Z',
            modified_at: '2023-08-21T23:50:30.276Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        desc: 'String',
        SKU: 'String',
        price: 'String',
        active: true,
        deleted_at: '2023-08-21T23:50:30.276Z',
        modified_at: '2023-08-21T23:50:30.276Z',
        category: {
          create: {
            name: 'String',
            desc: 'String',
            active: true,
            deleted_at: '2023-08-21T23:50:30.277Z',
            modified_at: '2023-08-21T23:50:30.277Z',
          },
        },
        inventory: {
          create: {
            quantity: 2267165,
            deleted_at: '2023-08-21T23:50:30.277Z',
            modified_at: '2023-08-21T23:50:30.277Z',
          },
        },
        discount: {
          create: {
            name: 'String',
            desc: 'String',
            discount_percent: 5971819.566767227,
            active: true,
            deleted_at: '2023-08-21T23:50:30.277Z',
            modified_at: '2023-08-21T23:50:30.277Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
