const q = require('../db/queries/q')

module.exports = ({ apiRouter }) => {

  apiRouter.get('/all/:page*', async (ctx) => {

    // method for getting all data
    // if page(number) is omitted than page=1
    // returns pretty json

    try {
      const dt = await q.getAllYellowData(ctx.params.page)
      ctx.body = (JSON.stringify({
        status: 'success',
        json: dt
      }, null, '  '))
    } catch (err) {
      console.log(err)
    }
  }).get('/payment_types/distinct', async (ctx) => {
    //
    // method for getting distinct payment types
    // returns pretty json
    try {
      const dt = await q.getYellowDataDifferentPaymentTypes()
      ctx.body = (JSON.stringify({
        status: 'success',
        json: dt
      }, null, '  '))
    } catch (err) {
      console.log(err)
    }
  }).get('/vendors/distinct', async (ctx) => {
    // method for getting distinct vendor id's
    // returns pretty json
    try {
      const dt = await q.getYellowDataDifferentVendors()
      ctx.body = (JSON.stringify({
        status: 'success',
        json: dt
      }, null, '  '))
    } catch (err) {
      console.log(err)
    }
  })
}
