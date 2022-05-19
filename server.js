const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const  { BASEURLS } = require('./config/constant')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/category/:params', async ctx => {
        const finalPath ='/category'
        const { params } = ctx.params
        const listParams = params && params.split('-')
        if (listParams && listParams.length === 4) {
          const categoryId = listParams[0]
          const tagId = listParams[1]
          const provinceId = listParams[2]
          const page = listParams[3]
          await app.render(ctx.req, ctx.res, finalPath, { ...ctx.query, categoryId, tagId, provinceId, page})
        }
    })

    router.get('/', async ctx => {
        // await handle(ctx.req, ctx.res)
        await app.render(ctx.req, ctx.res, '/index', ctx.query)
        // ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        ctx.set('Access-Control-Allow-Credentials', true)

        await next()
        if (ctx.status === 200) {
            await handle(ctx.req, ctx.res)
            ctx.respond = false
        }
    })

    server.use(router.routes())
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })