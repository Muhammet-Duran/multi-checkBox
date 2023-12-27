module.exports = {
  '*.(js|jsx|ts|tsx)': ['prettier --write', 'eslint --fix'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '--ignore-path': ['.gitignore'],
  '**/*.test.tsx': () => `yarn testWatchAll`,
};
