const { Model } = require('objection')


class Category extends Model {

    static get idColumn() {
        return 'category_id';
    }

    static get tableName() {
        return 'Categories'
    }

    static get relationMappings() {

        const Product = require('./Product')

        return {
            products: {
                relation: Model.HasManyRelation,
                modelClass: Product,
                join: {
                    from: 'Categories.category_id',
                    to: 'Products.category_id'
                }
            }
        }

    }

}

module.exports = Category
