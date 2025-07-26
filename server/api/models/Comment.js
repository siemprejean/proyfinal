
module.exports = {
  attributes: {

    text: {
      type: 'string',
      required: true,
    },

    cardId: {
      model: 'Card',
      required: true,
      columnName: 'card_id',
    },
    userId: {
      model: 'User',
      columnName: 'user_id',
    },
  },
};
