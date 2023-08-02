const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const getCamelCase = require('../helpers/stringToCamelCase');
const getPascalCase = require('../helpers/stringToPascalCase');
const componentAsyncTemplates = require('../templates/componentAsyncTemplates');
const componentTemplate = require('../templates/componentTemplate');
const componentTestsTemplates = require('../templates/componentTestsTemplates');
const readmiTemplates = require('../templates/readmiTemplates');
const scssModuleTemplates = require('../templates/scssModuleTemplates');
const storybookTemplates = require('../templates/storybookTemplates');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.log('Не удалось создать UI директорию', e);
    }
  };

  const createComponent = async () => {
    const nameToCamelCase = `${getCamelCase(sliceName)}`;
    const nameToPascalCase = `${getPascalCase(sliceName)}`;

    try {
      await fs.writeFile(
        resolveUIPath(`${nameToPascalCase}.tsx`),
        componentTemplate(sliceName),
      );
      await fs.writeFile(
        resolveUIPath(`${nameToCamelCase}.test.tsx`),
        componentTestsTemplates(sliceName),
      );
      await fs.writeFile(
        resolveUIPath(`${nameToPascalCase}.async.tsx`),
        componentAsyncTemplates(sliceName),
      );
      await fs.writeFile(
        resolveUIPath(`${nameToPascalCase}.module.scss`),
        scssModuleTemplates(sliceName),
      );
      await fs.writeFile(
        resolveUIPath(`${nameToPascalCase}.stories.tsx`),
        storybookTemplates(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать компонент', e);
    }
  };

  await createUIDir();
  await createComponent();
};
