
const Roles = {
  EDITOR: 'editor',
  VIEWER: 'viewer',
};

const SHARED_RULES = {
  role: {},
  canComment: { setTo: null },
};

const RULES_BY_ROLE = {
  [Roles.EDITOR]: {
    canComment: { setTo: null },
  },
  [Roles.VIEWER]: {
    canComment: { defaultTo: false },
  },
};

module.exports = {
  Roles,
  SHARED_RULES,
  RULES_BY_ROLE,

  attributes: {

    role: {
      type: 'string',
      isIn: Object.values(Roles),
      required: true,
    },
    canComment: {
      type: 'boolean',
      allowNull: true,
      columnName: 'can_comment',
    },

    projectId: {
      model: 'Project',
      required: true,
      columnName: 'project_id',
    },
    boardId: {
      model: 'Board',
      required: true,
      columnName: 'board_id',
    },
    userId: {
      model: 'User',
      required: true,
      columnName: 'user_id',
    },
  },

  tableName: 'board_membership',
};
