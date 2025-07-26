
module.exports = {
  attributes: {

    dirname: {
      type: 'string',
      required: true,
    },
    extension: {
      type: 'string',
      required: true,
    },
    sizeInBytes: {
      type: 'string',
      required: true,
      columnName: 'size_in_bytes',
    },

    projectId: {
      model: 'Project',
      required: true,
      columnName: 'project_id',
    },
  },

  tableName: 'background_image',
};
