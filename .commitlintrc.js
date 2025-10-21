module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat','docs','fix','ci', 'chore','test','build']],
        'subject-full-stop': [2, 'never', '.'],
        'subject-max-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 200],
    }
};
