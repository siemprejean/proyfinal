
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
    isCompleted: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'is_completed',
    },

    taskListId: {
      model: 'TaskList',
      required: true,
      columnName: 'task_list_id',
    },
    linkedCardId: {
      model: 'Card',
      columnName: 'linked_card_id',
    },
    assigneeUserId: {
      model: 'User',
      columnName: 'assignee_user_id',
    },
  },
};
