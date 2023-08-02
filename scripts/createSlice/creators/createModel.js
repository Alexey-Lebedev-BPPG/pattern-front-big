const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const getCamelCase = require('../helpers/stringToCamelCase');
const getPascalCase = require('../helpers/stringToPascalCase');
const selectorsTemplates = require('../templates/selectorsTemplates');
const selectorsTestsTemplates = require('../templates/selectorsTestsTemplates');
const sliceTemplate = require('../templates/sliceTemplate');
const sliceTestsTemplates = require('../templates/sliceTestsTemplates');
const thunksTemplates = require('../templates/thunksTemplates');
const thunksTestsTemplates = require('../templates/thunksTestsTemplates');
const typesTemplates = require('../templates/typesTemplates');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments);

  const nameToCamelCase = `${getCamelCase(sliceName)}`;
  const nameToPascalCase = `${getPascalCase(sliceName)}`;

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('types'));
    } catch (e) {
      console.log(
        `Не удалось создать model сегмент для слайса ${sliceName}`,
        e,
      );
    }
  };

  const createSelectors = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('selectors', `get${nameToPascalCase}.ts`),
        selectorsTemplates(sliceName),
      );
      await fs.writeFile(
        resolveModelPath('selectors', `get${nameToPascalCase}.test.ts`),
        selectorsTestsTemplates(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать селекторы', e);
    }
  };

  const createServices = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('services', `fetch${nameToPascalCase}.ts`),
        thunksTemplates(sliceName),
      );
      await fs.writeFile(
        resolveModelPath('services', `fetch${nameToPascalCase}.test.ts`),
        thunksTestsTemplates(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать селекторы', e);
    }
  };

  const createSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${nameToCamelCase}.ts`),
        sliceTemplate(sliceName),
      );
      await fs.writeFile(
        resolveModelPath('slices', `${nameToCamelCase}.test.ts`),
        sliceTestsTemplates(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать редакс слайс', e);
    }
  };

  const createType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${nameToCamelCase}.ts`),
        typesTemplates(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать тип схемы стейта', e);
    }
  };

  await createModelStructure();
  await createSelectors();
  await createServices();
  await createSlice();
  await createType();
};
