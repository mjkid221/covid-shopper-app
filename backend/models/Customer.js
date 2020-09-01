const { Model } = require('objection')



class Customer extends Model {

    static get idColumn() {
        return 'c_id';
    }

    static get tableName() {
        return 'Customers'
    }

    static get relationMappings() {
        
        const List = require('./List')

        return {
            lists: {
                relation: Model.HasManyRelation,
                modelClass: List,
                join: {
                    from: 'Customers.c_id',
                    to: 'Lists.c_id'
                }
            }
        }
    }

}

module.exports = Customer
