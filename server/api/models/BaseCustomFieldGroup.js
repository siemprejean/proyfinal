
module.exports = {
  attributes: {

    name: {
      type: 'string',
      required: true,
    },

    projectId: {
      model: 'Project',
      required: true,
      columnName: 'project_id',
    },
  },

  tableName: 'base_custom_field_group',
};
