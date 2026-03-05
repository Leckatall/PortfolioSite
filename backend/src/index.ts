import prisma from './prisma';

// const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  
  // Create an example user
  const user = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      name: 'Alice',
      posts: {
        create: {
          title: 'Hello World',
          description: 'This is my first project',
          published: true,
        },
      },
    },
  })
  
  console.log({ user })
  
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
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
