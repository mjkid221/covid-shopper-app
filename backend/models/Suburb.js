const { Model } = require('objection')


class Suburb extends Model {

    static get idColumn() {
        return 'suburb_id';
    }

    static get tableName() {
        return 'Suburbs'
    }

    static get relationMappings() {

        const Store = require('./Store')

        return {
            stores: {
                relation: Model.HasManyRelation,
                modelClass: Store,
                join: {
                    from: 'Suburb.suburb_id',
                    to: 'Stores.suburb_id'
                }
            }
        }

    }

}

module.exports = Suburb
