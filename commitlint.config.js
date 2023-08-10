module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['jira'],
  rules: {
    'jira-task-id-max-length': [0],
  },
  ignores: [message => message.includes('WIP')],
};
