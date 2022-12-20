// ESM
import Fastify from 'fastify'
import sequelize from 'sequelize'
import User from "./database/connection.js"

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });
  return { hello: 'world' }
})

fastify.get('/all', async (request, reply) => {
  const jane = await User.findAll();
  return jane
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()