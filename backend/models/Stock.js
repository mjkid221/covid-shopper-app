const { Model } = require('objection')

const Store = require('./Store')
const Product = require('./Product')

class Stock extends Model {

    static get idColumn() {
        return ['store_id', 'product_id'];
    }

    static get tableName() {
        return 'Stocks'
    }

    static relationMappings = {
        store: {
            relation: Model.BelongsToOneRelation,
            modelClass: Store,
            join: {
                from: 'Stocks.store_id',
                to: 'Stores.store_id'
            }
        },
        product: {
            relation: Model.BelongsToOneRelation,
            modelClass: Product,
            join: {
                from: 'Stocks.product_id',
                to: 'Products.product_id'
            }
        }
    }

}

module.exports = Stock
