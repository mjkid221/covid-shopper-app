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

    static get relationMappings() {

        const Customer = require('./Customer')
        const ListProduct = require('./ListProduct')

        return {
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
                    from: 'Lists.list_id',
                    to: 'Shopping_List_Products.list_id'
                }
            }
        }
    }

    $beforeInsert(context) {
        this.list_date = new Date().toISOString().slice(0, 10);
    }

}

module.exports = List
