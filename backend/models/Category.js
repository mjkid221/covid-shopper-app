const { Model } = require('objection')

class Category extends Model {

    static get idColumn() {
        return 'category_id';
    }

    static get tableName() {
        return 'Categories'
    }

    static relationMappings = {
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

module.exports = Category
