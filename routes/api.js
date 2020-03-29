const q = require("../db/queries/q");

module.exports = ({apiRouter}) => {

    apiRouter.get('/all/:page*', async (ctx) => {
        try {
            const dt = await q.getAllYellowData(ctx.params.page);
            ctx.body = (JSON.stringify({
                status: 'success',
                json: dt
            }, null, "  "));
        } catch (err) {
            console.log(err);
        }
    }).get('/payment_types/distinct', async (ctx) => {
        try {
            const dt = await q.getYellowDataDifferentPaymentTypes();
            ctx.body = (JSON.stringify({
                status: 'success',
                json: dt
            }, null, "  "));
        } catch (err) {
            console.log(err);
        }
    }).get('/vendors/distinct', async (ctx) => {
        try {
            const dt = await q.getYellowDataDifferentVendors();
            ctx.body = (JSON.stringify({
                status: 'success',
                json: dt
            }, null, "  "));
        } catch (err) {
            console.log(err);
        }
    });
};
