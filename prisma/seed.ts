import prisma from '../lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.subjects.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Mattematikk',
      },
    }),
    prisma.subjects.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Norsk',
      },
    }),
    prisma.subjects.upsert({
      where: { id: 3 },
      update: {},
      create: {
        name: 'Samfunnsfag',
      },
    }),
    prisma.subjects.upsert({
      where: { id: 4 },
      update: {},
      create: {
        name: 'Naturfag',
      },
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
