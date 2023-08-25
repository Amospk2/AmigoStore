import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const userAddressData = [
      {
        address_description: 'Loteamento Pôr do Sol, nº91, Cajazeira',
        city: 'Mutuípe',
        postal_code: '45480000',
        country: 'Brasil',
        phone: '(75)988001122',
      },
      {
        address_description: 'Rua Carlota Sá, nº45, Jequiezinho',
        city: 'Jequié',
        postal_code: '45208107',
        country: 'Brasil',
        phone: '(73)998001122',
      },
      {
        address_description: 'Av. Orlando Gomes, nº1845, Piatã',
        city: 'Salvador',
        postal_code: '41650010',
        country: 'Brasil',
        phone: '(73)988558711',
      },
      {
        address_description: 'Av. Alves Pereira, Centro',
        city: 'Jequié',
        postal_code: '45200005',
        country: 'Brasil',
        phone: '(71)998259107',
      },
    ]
    const userData: Prisma.UserCreateArgs['data'][] = [
      {
        id: '121-223-4343-112',
        email: 'joaodev@gmail.com',
        first_name: 'João',
        last_name: 'Santos',
        hashedPassword: '1234567890',
        salt:'1l2l3k4',
        Adresses: {
          create:userAddressData[0]
        }
      },
      {
        id: '111-2233-433-12233',
        email: 'aguinaldo4789@hotmail.com',
        first_name: 'Aguinaldo',
        last_name: 'Barreto',
        hashedPassword: '1234567890',
        salt:'1l2l3k4',
        Adresses: {
          create:userAddressData[1]
        }
      },
      {
        id: '551-335-4343-12233',
        email: 'apamelapaula2006@gmail.com',
        first_name: 'Pamela',
        last_name: 'Paula',
        hashedPassword: '1234567890',
        salt:'1l2l3k4',
        Adresses: {
          create:userAddressData[2]
        }
      },
      {
        id: '1121-5553-433-123',
        email: 'adrielle_amaral@yahoo.com.br',
        first_name: 'Adrielle',
        last_name: 'Amaral',
        hashedPassword: '1234567890',
        salt:'1l2l3k4',
        Adresses: {
          create:userAddressData[3]
        }
      },
      {
        id: '1121-2233-4743-1553',
        email: 'murilogregorio9@hotmail.com',
        first_name: 'Murilo',
        last_name: 'Gregorio',
        hashedPassword: '1234567890',
        salt:'1l2l3k4',
        Adresses: {
          create:userAddressData[4]
        }
      },
      {
        id: '1121-22063-4343-12233',
        email: 'moniquecristina_hta@hotmail.com ',
        first_name: 'Monique',
        last_name: 'Cristina',
        hashedPassword: '1234567890',
        salt:'1l2l3k4',
        Adresses: {
          create:userAddressData[5]
        }
      },
    ]


    const productData: Prisma.ProductCreateArgs['data'][] = [
      {
        category:{
          create: {
            name: 'Microfone Condensador Profissional',
            desc: 'Eleve a qualidade das suas gravações de áudio com nosso microfone condensador profissional. Projetado para capturar áudio com clareza e precisão, este microfone é perfeito para streamers, criadores de conteúdo e músicos. Sua sensibilidade ajustável e padrão de captação versátil garantem resultados profissionais em cada gravação.',
            active: true,
          },
        },
        discount: {
          create: {
            active: true,
            name: 'Inalguração',
            desc: 'Desconto de inalguração',
            discount_percent: 10
          }
        },
        inventory: {
          create: {
            quantity: 10,
          }
        },
        name: 'Memória Kingston Fury Impact, 8GB, 3200MHz, DDR4, Para Notebook',
        desc: 'Conheça a Memória Kingston Fury Impact Torne o seu notebook absolutamente equipado com a memória Kingston Fury Impact 8GB 3200MHz DDR4 CL20 SODIMM. Ideal para reduzir os atrasos do sistema, ela foi desenvolvida pronta para AMD Ryzen e Intel XMP, Plug N Play, fazendo overclock automático Plug N Play até 3200MHz, para suportar as tecnologias de CPU mais recentes da Intel e AMD.',
        SKU: null,
        price: '199,99',
        active: true,
      }

    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      userData.map(async (data: Prisma.UserCreateArgs['data']) => {
        await db.user.create({ data })
      }),
    )

    Promise.all(
      productData.map(async (data: Prisma.ProductCreateArgs['data']) => {
        await db.product.create({ data })
      })
    )


    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
