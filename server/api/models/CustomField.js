
module.exports = {
  attributes: {

    position: {
      type: 'number',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    showOnFrontOfCard: {
      type: 'boolean',
      required: true,
      columnName: 'show_on_front_of_card',
    },

    baseCustomFieldGroupId: {
      model: 'BaseCustomFieldGroup',
      columnName: 'base_custom_field_group_id',
    },
    customFieldGroupId: {
      model: 'CustomFieldGroup',
      columnName: 'custom_field_group_id',
    },
  },

  tableName: 'custom_field',
};
