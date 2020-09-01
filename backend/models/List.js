const { Model } = require('objection')

const Customer = require('./Customer')
const ListProduct = require('./ListProduct')

class List extends Model {

    static get idColumn() {
        return 'list_id';
    }

    static get tableName() {
        return 'Lists'
    }

    static relationMappings = {
        customer: {
            relation: Model.BelongsToOneRelation,
            modelClass: Customer,
            join: {
                from: 'Lists.c_id',
                to: 'Customers.c_id'
            }
        },
        products: {
            relation: Model.HasManyRelation,
            modelClass: ListProduct,
            join: {
                from: 'Lists.product_id',
                to: 'Shopping_List_Products.product_id'
            }
        }
    }

}

module.exports = List
