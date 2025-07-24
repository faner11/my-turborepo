import { serve } from '@hono/node-server'

import { Hono } from 'hono'
import { AppV3 } from '@repo/app3'
const app = new Hono()

app.get('/', (c) => {
  return c.text(`Hello Hono! - ${AppV3}`)
})  

const server = serve(
  {
    fetch: app.fetch,
    port: 5174,
  },
  () => {
    console.info('Server is running on http://localhost:5174')
  },
)

// graceful shutdown
process.on('SIGINT', () => {
  server.close()
  process.exit(0)
})
process.on('SIGTERM', () => {
  server.close((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    process.exit(0)
  })
})
