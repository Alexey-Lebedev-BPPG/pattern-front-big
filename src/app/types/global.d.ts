/* eslint-disable no-use-before-define */
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.module.scss' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.module.sass' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.module.css' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __IS_DEV_DEBUG__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

// service
interface IResponse<R = unknown> {
  data: R;
  status: number;
  success?: boolean;
}

interface IAction<P = unknown> {
  type: string;
  payload?: P;
}

interface IMessage {
  message: string;
}

interface IErrorMessage extends IMessage {
  error: string;
  statusCode: number;
}

// general
interface IFieldsPaginations {
  page: number;
  search: string;
  step: number;
}

type RefDiv = HTMLDivElement;
type RefBTN = HTMLButtonElement;
type RefInput = HTMLInputElement;
