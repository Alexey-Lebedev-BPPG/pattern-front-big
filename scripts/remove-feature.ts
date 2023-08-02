import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (!removedFeatureName) throw new Error('Укажите название фичи-флага');
if (!featureState) throw new Error('Укажите состояние фичи-флага');
if (featureState !== 'on' && featureState !== 'off')
  throw new Error(
    'Некорректное значение состояния фичи (только "on" или "off")',
  );

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFunction = (node: Node): boolean => {
  let isToggleFeatures = false;

  node.forEachChild(child => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    )
      isToggleFeatures = true;
  });

  return isToggleFeatures;
};

const isToggleComponent = (node: Node): boolean => {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
  return identifier?.getText() === toggleComponentName;
};

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  );

  if (!objectOptions) return;

  const onFunctionProperty = objectOptions.getProperty('on');
  const offFunctionProperty = objectOptions.getProperty('off');
  const featureNameProperty = objectOptions.getProperty('name');

  const onFunction = onFunctionProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );
  const offFunction = offFunctionProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );
  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralValue();

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on')
    node.replaceWithText(onFunction?.getBody().getText() || '');
  if (featureState === 'off')
    node.replaceWithText(offFunction?.getBody().getText() || '');
};

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) =>
  jsxAttributes.find(node => node.getName() === name);

const removeStaples = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  return value?.startsWith('(') ? value.slice(1, -1) : value;
};

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');
  const featureNameAttribute = getAttributeNodeByName(
    attributes,
    'nameFeatures',
  );

  const featureNameValue = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralValue();
  const onValue = removeStaples(onAttribute);
  const offValue = removeStaples(offAttribute);

  if (featureNameValue !== removedFeatureName) return;

  if (featureState === 'on' && onValue) node.replaceWithText(onValue);
  if (featureState === 'off' && offValue) node.replaceWithText(offValue);
};

files.forEach(sourceFile => {
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node))
      return replaceToggleFunction(node);
    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    )
      return replaceToggleComponent(node);
  });
});

project.save().then(() => console.log('Done!'));
