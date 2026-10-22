module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // <type>(<scope>): <description>. The scope is the feature ID in lowercase, or the area of the code when there is none.
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
  },
};
