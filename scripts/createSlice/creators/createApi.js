const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const getCamelCase = require('../helpers/stringToCamelCase');
const apiTemplates = require('../templates/apiTemplates');

module.exports = async (layer, sliceName) => {
  const resolveMainPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'api', ...segments);

  const nameToCamelCase = `${getCamelCase(sliceName)}`;

  try {
    await fs.mkdir(resolveMainPath());
    await fs.writeFile(
      resolveMainPath(`${nameToCamelCase}.ts`),
      apiTemplates(sliceName),
    );
  } catch (e) {
    console.log('Не удалось создать папку API', e);
  }
};
