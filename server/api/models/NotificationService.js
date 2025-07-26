
const Formats = {
  TEXT: 'text',
  MARKDOWN: 'markdown',
  HTML: 'html',
};

module.exports = {
  Formats,

  attributes: {

    url: {
      type: 'string',
      required: true,
    },
    format: {
      type: 'string',
      isIn: Object.values(Formats),
      required: true,
    },

    userId: {
      model: 'User',
      columnName: 'user_id',
    },
    boardId: {
      model: 'Board',
      columnName: 'board_id',
    },
  },

  tableName: 'notification_service',
};
