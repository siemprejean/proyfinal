
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
      defaultsTo: true,
      columnName: 'show_on_front_of_card',
    },
    hideCompletedTasks: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'hide_completed_tasks',
    },
    cardId: {
      model: 'Card',
      required: true,
      columnName: 'card_id',
    },
  },

  tableName: 'task_list',
};
