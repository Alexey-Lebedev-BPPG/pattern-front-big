import { HTMLInputTypeAttribute } from 'react';
import { Validate } from '@/shared/const/Validate';

export interface IValidateInputsProps {
  type: HTMLInputTypeAttribute;
  required?: boolean;
  min?: number;
  max?: number;
}

const checkFieldValidate = (
  iteratedString: string,
  options: IValidateInputsProps,
) => {
  const { type, required, min, max } = options;
  let errorField = '';

  if (required && iteratedString === '') {
    if (type === 'email') errorField = 'Please enter a valid email address';
    if (type === 'url') errorField = 'Please enter a valid url';
    if (type === 'password')
      errorField =
        'Please enter a valid password containing at least 8 characters with 1 uppercase letter and 1 number';
    if (type === 'text' || type === 'number')
      errorField = 'Please enter a valid parameters';
  }

  if (min && +iteratedString < min) {
    if (type === 'email') errorField = 'Please enter a valid email address';
    if (type === 'url') errorField = 'Please enter a valid url';
    if (type === 'password')
      errorField =
        'Please enter a valid password containing at least 8 characters with 1 uppercase letter and 1 number';
    if (type === 'text' || type === 'number')
      errorField = 'Please enter a valid parameters';
  }

  if (max && +iteratedString > max) {
    if (type === 'email') errorField = 'Please enter a valid email address';
    if (type === 'url') errorField = 'Please enter a valid url';
    if (type === 'password')
      errorField =
        'Please enter a valid password containing at least 8 characters with 1 uppercase letter and 1 number';
    if (type === 'text' || type === 'number')
      errorField = 'Please enter a valid parameters';
  }

  return errorField;
};

const checkPartLengthString = (
  iteratedString: string,
  options: IValidateInputsProps,
) => {
  const { type } = options;
  let errorLength = '';
  const previousPart = iteratedString.split('@')[0];
  const nextPart = iteratedString.split('@')[1];

  if (previousPart && (previousPart.length === 0 || previousPart.length > 64)) {
    if (type === 'email') errorLength = 'Please enter a valid email address';
    if (type === 'url') errorLength = 'Please enter a valid url';
    if (type === 'password')
      errorLength =
        'Please enter a valid password containing at least 8 characters with 1 uppercase letter and 1 number';
    if (type === 'text' || type === 'number')
      errorLength = 'Please enter a valid parameters';
  }

  if (nextPart && (nextPart.length === 0 || nextPart.length > 255))
    errorLength = 'errorLength';

  return errorLength;
};

const checkForStringConditions = (
  iteratedString: string,
  lengthIteratedString: number,
  options: IValidateInputsProps,
) => {
  const { SPECIALS, UPPERCASE_LETTERS, DIGITS } = Validate;
  const { type } = options;
  let errorSymbol = '';
  let errorCountEmail = 0;
  let errorCountPasswordUpper = 0;
  let errorCountPasswordDigits = 0;

  if (type === 'email') {
    for (let i = 0; i < lengthIteratedString; i++)
      if (SPECIALS.includes(iteratedString[i])) errorCountEmail++;

    errorSymbol =
      errorCountEmail > 0 ? '' : 'Please enter a valid email address';
  } else if (type === 'url') {
    // eslint-disable-next-line prefer-regex-literals
    const urlRegex = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
    );
    errorSymbol = urlRegex.test(iteratedString)
      ? ''
      : 'Please enter a valid url';
  } else if (type === 'password') {
    for (let i = 0; i < lengthIteratedString; i++) {
      if (UPPERCASE_LETTERS.includes(iteratedString[i]))
        errorCountPasswordUpper++;
      if (DIGITS.includes(iteratedString[i])) errorCountPasswordDigits++;
    }
    errorSymbol =
      errorCountPasswordUpper > 0 && errorCountPasswordDigits > 0
        ? ''
        : 'Please enter a valid password containing at least 8 characters with 1 uppercase letter and 1 number';
  }

  return errorSymbol;
};

export const validateInputs = (
  iteratedString: string,
  options: IValidateInputsProps,
) => {
  const lengthIteratedString = iteratedString.length;
  let error = '';

  error = checkFieldValidate(iteratedString, options);
  if (!error) error = checkPartLengthString(iteratedString, options);

  if (!error)
    error = checkForStringConditions(
      iteratedString,
      lengthIteratedString,
      options,
    );

  return error;
};
