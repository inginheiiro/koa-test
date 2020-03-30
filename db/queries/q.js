const knex = require('../connection');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

// return all data from yellow table
// this method uses pagination.
// 100 items per page.
function getAllYellowData(page) {
    return knex('yellow')
        .select('*')
        .paginate({ perPage: 100, currentPage: page || 1});
}

// return distinct payment types from yellow table
function getYellowDataDifferentPaymentTypes() {
    return knex.select(knex.raw('distinct ("payment_type")')).from('yellow')
}

// return distinct vendor id's from yellow table
function getYellowDataDifferentVendors() {
    return knex.select(knex.raw('distinct ("vendorid")')).from('yellow')
}

module.exports = {
    getAllYellowData,
    getYellowDataDifferentPaymentTypes,
    getYellowDataDifferentVendors
};
