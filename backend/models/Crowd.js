const { Model } = require('objection')

class Crowd extends Model {

    static get idColumn() {
        return ['store_id', 'crowd_entry_id'];
    }

    static get tableName() {
        return 'Crowds'
    }

    static get relationMappings() {

        const Store = require('./Store')

        return {
            list: {
                relation: Model.HasManyRelation,
                modelClass: Store,
                join: {
                    from: 'Stores.store_id',
                    to: 'Crowds.store_id'
                }
            }
        }

    }

}

module.exports = Crowd
