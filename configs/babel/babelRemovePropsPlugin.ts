import { PluginItem } from '@babel/core';

// eslint-disable-next-line import/no-anonymous-default-export, func-names
export default function (): PluginItem {
  return {
    visitor: {
      Program(paths, state) {
        const forbidden = state.opts.props || [];

        paths.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;
            if (forbidden.includes(nodeName)) current.parentPath.remove();
          },
        });
      },
    },
  };
}
