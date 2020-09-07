const { Model } = require('objection')

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
        const Product = require('./Product')

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
            },
            products2: {
                relation: Model.ManyToManyRelation,
                modelClass: Product,
                join: {
                    from: 'Lists.list_id',
                    through: {
                        from: 'Shopping_List_Products.list_id',
                        to: 'Shopping_List_Products.product_id'
                    },
                    to: 'Products.product_id'
                }
            }
        }
    }

    $beforeInsert(context) {
        this.list_date = new Date().toISOString().slice(0, 10);
    }

}

module.exports = List
