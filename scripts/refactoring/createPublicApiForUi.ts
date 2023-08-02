import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

const PROJECT_LAYERS = [
  'app',
  'pages',
  'features',
  'widgets',
  'entities',
  'shared',
];

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

function isAbsolute(generalPath: string) {
  return PROJECT_LAYERS.some(layer => generalPath.startsWith(layer));
}

const files = project.getSourceFiles();
const indexFilename = 'index.ts';
const layer = process.argv[2] || 'shared';
const slice = 'ui';
const dest = project.getDirectory(
  path.resolve(__dirname, '..', '..', 'src', layer, slice),
);
const directories = dest?.getDirectories();

directories?.forEach(directory => {
  const indexFilePath = directory.getPath();
  const isIndexFileExist = directory.getSourceFile(
    `${indexFilePath}/${indexFilename}`,
  );

  if (!isIndexFileExist) {
    const filesInFolder = directory.getSourceFiles([
      '**/*.tsx',
      '!**/*.stories.tsx',
      '!**/*.test.tsx',
    ]);

    let content = '';

    filesInFolder?.forEach(component => {
      const folderLen = indexFilePath.length;
      const moduleName = component.getBaseNameWithoutExtension();
      const modulePath = `.${component.getFilePath().slice(folderLen, -4)}`;
      content += `export { ${moduleName} } from "${modulePath}";\n`;
    });

    const file = directory.createSourceFile(
      `${indexFilePath}/${indexFilename}`,
      content,
      { overwrite: true },
    );

    file
      .save()
      .then(() => console.log(`${indexFilePath} --> index.ts created!`));
  }
});

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach(importDeclaration => {
    let value = importDeclaration.getModuleSpecifierValue();
    value = value.replace('@/', '');
    const segments = value.split('/');

    const isLayer = segments?.[0] === layer;
    const isSlice = segments?.[1] === slice;

    if (isAbsolute(value) && isLayer && isSlice) {
      const result = value.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
      console.log(
        `${value} ---> Path was success change! Result: @/${result}.`,
      );
    }
  });
});

project.save().then(() => console.log('Done!'));
