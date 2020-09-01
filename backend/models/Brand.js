const { Model } = require('objection')

const Product = require('./Product')

class Brand extends Model {

    static get idColumn() {
        return 'brand_id';
    }

    static get tableName() {
        return 'Brands'
    }

    static relationMappings = {
        products: {
            relation: Model.HasManyRelation,
            modelClass: Product,
            join: {
                from: 'Brand.brand_id',
                to: 'Products.brand_id'
            }
        },
    }

}

module.exports = Brand
