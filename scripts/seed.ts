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
    const userData: Prisma.UserCreateArgs['data'][] = [
      {
        email: 'joaodev@gmail.com',
        first_name: 'João',
        last_name: 'Santos',
        Adresses: null,
        Payments: null,
        Orders: null,
        Session: null,
      },
      {
        email: 'aguinaldo4789@hotmail.com',
        first_name: 'Aguinaldo',
        last_name: 'Barreto',
        Adresses: null,
        Payments: null,
        Orders: null,
        Session: null,
      },
      {
        email: 'apamelapaula2006@gmail.com',
        first_name: 'Pamela',
        last_name: 'Paula',
        Adresses: null,
        Payments: null,
        Orders: null,
        Session: null,
      },
      {
        email: 'adrielle_amaral@yahoo.com.br',
        first_name: 'Adrielle',
        last_name: 'Amaral',
        Adresses: null,
        Payments: null,
        Orders: null,
        Session: null,
      },
      {
        email: 'murilogregorio9@hotmail.com',
        first_name: 'Murilo',
        last_name: 'Gregorio',
        Adresses: null,
        Payments: null,
        Orders: null,
        Session: null,
      },
      {
        email: 'moniquecristina_hta@hotmail.com ',
        first_name: 'Monique',
        last_name: 'Cristina',
        Adresses: null,
        Payments: null,
        Orders: null,
        Session: null,
      },
    ]

    const userAddressData: Prisma.UserAddressCreateArgs['data'][] = [
      {
        user_id: null,
        address_description: 'Loteamento Pôr do Sol, nº91, Cajazeira',
        city: 'Mutuípe',
        postal_code: '45480000',
        country: 'Brasil',
        phone: '(75)988001122',
      },
      {
        user_id: null,
        address_description: 'Rua Carlota Sá, nº45, Jequiezinho',
        city: 'Jequié',
        postal_code: '45208107',
        country: 'Brasil',
        phone: '(73)998001122',
      },
      {
        user_id: null,
        address_description: 'Av. Orlando Gomes, nº1845, Piatã',
        city: 'Salvador',
        postal_code: '41650010',
        country: 'Brasil',
        phone: '(73)988558711',
      },
      {
        user_id: null,
        address_description: 'Av. Alves Pereira, Centro',
        city: 'Jequié',
        postal_code: '45200005',
        country: 'Brasil',
        phone: '(71)998259107',
      },
    ]

    const productData: Prisma.ProductCreatArgs['data'][] = [
      {
        category_id: null,
        inventory_id: null,
        discount_id: null,
        name: 'Memória Kingston Fury Impact, 8GB, 3200MHz, DDR4, Para Notebook',
        desc: 'Conheça a Memória Kingston Fury Impact Torne o seu notebook absolutamente equipado com a memória Kingston Fury Impact 8GB 3200MHz DDR4 CL20 SODIMM. Ideal para reduzir os atrasos do sistema, ela foi desenvolvida pronta para AMD Ryzen e Intel XMP, Plug N Play, fazendo overclock automático Plug N Play até 3200MHz, para suportar as tecnologias de CPU mais recentes da Intel e AMD.',
        SKU: null,
        price: '199,99',
        active: true,
      },
      {
        category_id: null,
        inventory_id: null,
        discount_id: null,
        name: 'Notebook Lenovo Ideapad 3i Core I5-1135g7, RAM 8GB, SSD 512GB, Intel Iris Xe, Windows 11, 15.6 Polegadas',
        desc: 'lenovo ideapad 3i possui design leve e compacto. Faça vídeo-conferências em alta-definição com a câmera hd-720p. Sua privacidade pessoal é muito importante. É por isso que o ideapad 3i está equipado com porta de privacidade da webcam. Quando não estiver em uma chamada de vídeo ou gravando algo, basta deslizá-la. Conta com armazenamento ssd pcie, que é 10x mais rápido* que um hdd 2.5 sata, você terá mais segurança ao armazenar seus dados. A tela full hd antirreflexo de 15.6 para maior conforto visual e os gráficos intel® iris® xe com tecnologia de aprimoramento por inteligência artificial garantem uma experiência de vídeo completa para jogos e criação. Notebook ideal para todos os momentos. Conta com wi-fi ac ultrarrápido e teclado numérico para trabalhar com mais agilidade nas suas planilhas. Nitidez e alta qualidade de som com certificação dolby audio. ',
        SKU: null,
        price: '3.168,25',
        active: true,
      },
      {
        category_id: null,
        inventory_id: null,
        discount_id: null,
        name: 'Console Sony Playstation 5, SSD 825GB, Edição Digital, Marvels Spider-Man 2 Limited Edition',
        desc: 'Jogar no PS5 Não Tem Limites, desfrute do carregamento do seu PS5, extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation Veloz como um raio, SSD ultrarrápido, domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer. Maximize suas sessões de jogo com tempo de carregamento praticamente instantâneo para jogos do PS5 instalados.',
        SKU: null,
        price: '4.274,99',
        active: true,
      },
      {
        category_id: null,
        inventory_id: null,
        discount_id: null,
        name: 'Headset Gamer HyperX Cloud III, DTS, Drivers 53mm, USB, PC, PS5, PS4, XBOX Series xis, Xbox One, Nintendo Switch, Mobile, Preto e Vermelho',
        desc: 'Sinta a diferença do HyperX nos detalhes, como nossa exclusiva espuma viscoelástica, couro sintético premium, distribuição de peso e força de aperto. Uma experiência mais confortável é alcançada com o ajuste desses fatores. Isso faz uma enorme diferença durante as sessões de jogos mais longas ou sempre que o headset for usado por longos períodos.',
        SKU: null,
        price: '599,99',
        active: true,
      },
      {
        category_id: null,
        inventory_id: null,
        discount_id: null,
        name: 'Microfone Gamer HyperX QuadCast S Podcast, Antivibração, LED RGB, USB, Compatível com PC, PS4 e Mac',
        desc: 'O HyperX QuadCast é o microfone independente ideal com todos os recursos para o streamer ou podcaster que procura um microfone com som de qualidade. O QuadCast vem com sua própria base "shock mount" antivibração para ajudar a reduzir os ruídos da vida diária e um filtro integrado para abafar sons percussivos desagradáveis. Saiba instantaneamente o status do seu microfone com o indicador em LED e simplesmente toque para colocá-lo em mudo para evitar acidentes inconvenientes na transmissão. ',
        SKU: null,
        price: '749,99',
        active: true,
      },
    ]
    const productCategoryData: Prisma.ProductCategoryCreatArgs['data'][] = [
      {
        name: 'Microfone Condensador Profissional',
        desc: 'Eleve a qualidade das suas gravações de áudio com nosso microfone condensador profissional. Projetado para capturar áudio com clareza e precisão, este microfone é perfeito para streamers, criadores de conteúdo e músicos. Sua sensibilidade ajustável e padrão de captação versátil garantem resultados profissionais em cada gravação.',
        active: true,
      },
      {
        name: 'Notebook de Alto Desempenho com SSD',
        desc: 'Potência e portabilidade se encontram no nosso notebook de alto desempenho com SSD. Equipado com um processador poderoso e uma unidade de estado sólido (SSD) de alta velocidade, este notebook oferece tempos de inicialização rápidos, multitarefa fluida e uma experiência de computação ágil. Seja para trabalho, estudo ou entretenimento, este notebook é um parceiro confiável.',
        active: true,
      },
      {
        name: 'Memória RAM DDR4 de Alta Velocidade',
        desc: 'Aumente a velocidade e o desempenho do seu sistema com nossa memória RAM DDR4 de alta velocidade. Com capacidade de resposta aprimorada e velocidades de transferência mais rápidas, esta memória é ideal para gamers, profissionais criativos e entusiastas de tecnologia. Execute aplicativos intensivos e multitarefa sem esforço, elevando sua produtividade.',
        active: true,
      },
      {
        name: 'Console de Jogos PlayStation 5 (PS5)',
        desc: '    Entre na próxima geração de jogos com o console PlayStation 5 (PS5). Com recursos avançados de hardware, gráficos impressionantes e tempos de carregamento ultra-rápidos, o PS5 oferece uma experiência de jogo imersiva e envolvente. Explore mundos virtuais deslumbrantes, jogue com amigos online e desfrute de uma biblioteca diversificada de jogos emocionantes.',
        active: true,
      },
      {
        name: 'Fone de Ouvido Bluetooth com Cancelamento de Ruído',
        desc: 'Experimente um som envolvente e livre de distrações com nosso fone de ouvido Bluetooth com cancelamento de ruído. Com tecnologia avançada de redução de ruído, você pode mergulhar completamente na sua música ou chamadas, seja em casa, no escritório ou em movimento. O ajuste confortável e a bateria de longa duração garantem uma experiência auditiva excepcional.',
        active: true,
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      userData.map(async (data: Prisma.UserCreateArgs['data']) => {
        const record = await db.user.create({ data })
        console.log(record)
      })
    )

    Promise.all(
      userAddressData.map(async (data: Prisma.UserAddressCreateArgs['data']) => {
        const record = await db.userAddress.create({ data })
        console.log(record)
      })
    )
    Promise.all(
      productData.map(async (data: Prisma.ProductCreateArgs['data']) => {
        const record = await db.product.create({ data })
        console.log(record)
      })
    )
    Promise.all(
      productCategoryData.map(async (data: Prisma.ProductCategoryCreateArgs['data']) => {
        const record = await db.productCategory.create({ data })
        console.log(record)
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
