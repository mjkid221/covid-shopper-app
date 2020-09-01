const { Model } = require('objection')

const List = require('./List')
const Product = require('./Product')

class ListProduct extends Model {

    static get idColumn() {
        return ['list_id', 'product_id'];
    }

    static get tableName() {
        return 'Shopping_List_Products'
    }

    static relationMappings = {
        list: {
            relation: Model.BelongsToOneRelation,
            modelClass: List,
            join: {
                from: 'Shopping_List_Products.list_id',
                to: 'Lists.list_id'
            }
        },
        product: {
            relation: Model.BelongsToOneRelation,
            modelClass: Product,
            join: {
                from: 'Shopping_List_Products.product_id',
                to: 'Products.product_id'
            }
        }
    }

}

module.exports = ListProduct
