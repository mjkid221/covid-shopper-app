const { Model } = require('objection')

const Stock = require('./Stock')
const Suburb = require('./Suburb')

class Store extends Model {

    static get idColumn() {
        return 'store_id';
    }

    static get tableName() {
        return 'Stores'
    }

    static relationMappings = {
        suburb: {
            relation: Model.BelongsToOneRelation,
            modelClass: Suburb,
            join: {
                from: 'Stores.suburb_id',
                to: 'Suburbs.suburb_id'
            }
        },
        stocks: {
            relation: Model.HasManyRelation,
            modelClass: Stock,
            join: {
                from: 'Stores.store_id',
                to: 'Stocks.store_id'
            }
        }
    }

}

module.exports = Store
