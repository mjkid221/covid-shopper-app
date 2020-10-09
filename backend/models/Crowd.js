const { Model } = require('objection')


class Crowd extends Model {

    static get idColumn() {
        return 'crowd_entry_id';
    }

    static get tableName() {
        return 'Crowds'
    }

    static get relationMappings() {

        const Store = require('./Store')

        return {
            store: {
                relation: Model.BelongsToOneRelation,
                modelClass: Store,
                join: {
                    from: 'Crowds.store_id',
                    to: 'Stores.store_id'
                }
            }
        }

    }

}

module.exports = Stock
