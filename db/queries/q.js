const knex = require('../connection');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

function getAllYellowData(page) {
    return knex('yellow')
        .select('*')
        .paginate({ perPage: 100, currentPage: page || 1});
}

function getYellowDataDifferentPaymentTypes() {
    return knex.select(knex.raw('distinct ("payment_type")')).from('yellow')
}

function getYellowDataDifferentVendors() {
    return knex.select(knex.raw('distinct ("vendorid")')).from('yellow')
}

module.exports = {
    getAllYellowData,
    getYellowDataDifferentPaymentTypes,
    getYellowDataDifferentVendors
};
