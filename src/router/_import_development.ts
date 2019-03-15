/* eslint import/no-dynamic-require:off, global-require:off */
module.exports = (file: string) => require(`@/views/${file}.vue`);
