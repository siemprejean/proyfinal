
module.exports = {
  attributes: {

    content: {
      type: 'string',
      required: true,
    },

    cardId: {
      model: 'Card',
      required: true,
      columnName: 'card_id',
    },
    customFieldGroupId: {
      model: 'CustomFieldGroup',
      required: true,
      columnName: 'custom_field_group_id',
    },
    customFieldId: {
      model: 'CustomField',
      required: true,
      columnName: 'custom_field_id',
    },
  },

  tableName: 'custom_field_value',
};
