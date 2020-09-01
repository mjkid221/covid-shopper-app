const { Model } = require('objection')


class Brand extends Model {

    static get idColumn() {
        return 'brand_id';
    }

    static get tableName() {
        return 'Brands'
    }

    static get relationMappings() {

        const Product = require('./Product')

        return {
            products: {
                relation: Model.HasManyRelation,
                modelClass: Product,
                join: {
                    from: 'Brand.brand_id',
                    to: 'Products.brand_id'
                }
            }
        }

    }

}

module.exports = Brand
