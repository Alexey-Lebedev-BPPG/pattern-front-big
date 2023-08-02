type TypeImage = 's' | 'm' | 'l' | 'xl' | 'xxl';

export const getCurrentSizeImageInTable = (
  orientation: 'horizontal' | 'vertical',
  typeImage?: TypeImage,
) => {
  const currentOrientation = orientation === 'horizontal';

  if (typeImage === 'm')
    return {
      height: currentOrientation ? '30px' : '50px',
      width: currentOrientation ? '50px' : '30px',
    };
  if (typeImage === 'l')
    return {
      height: currentOrientation ? '120px' : '270px',
      width: currentOrientation ? '204px' : '159px',
    };
  if (typeImage === 'xl')
    return {
      height: currentOrientation ? '168px' : '284px',
      width: currentOrientation ? '284px' : '168px',
    };
  if (typeImage === 'xxl')
    return {
      height: currentOrientation ? '253px' : '568px',
      width: currentOrientation ? '433px' : '334px',
    };

  return {
    height: currentOrientation ? '24px' : '40px',
    width: currentOrientation ? '40px' : '24px',
  };
};
