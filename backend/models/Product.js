const { Model } = require('objection')

class Product extends Model {

    static get idColumn() {
        return 'product_id';
    }

    static get tableName() {
        return 'Products'
    }

    static relationMappings =
        brand: {
            relation: Model.BelongsToOneRelation,
            modelClass: Brand,
            join: {
                from: 'Products.brand_id',
                to: 'Brands.brand_id'
            }
        },
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: Category,
            join: {
                from: 'Products.category_id',
                to: 'Categories.category_id'
            }
        }
    }

}

module.exports = Product
