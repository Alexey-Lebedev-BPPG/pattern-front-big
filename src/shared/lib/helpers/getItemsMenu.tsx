import { copyInBuffer } from './copyInBuffer';

import logo from '@/shared/assets/svg/logo.svg';

export const getItemShare = (text: string, iconsType: string, link: string) => {
  const icons = {
    copy: logo,
    facebook: logo,
    telegram: logo,
    twitter: logo,
    whatsapp: logo,
  };

  return [
    {
      Icon: icons.copy,
      content: 'Copy link',
      onClick: () => copyInBuffer(link),
    },
    {
      Icon: icons.twitter,
      content: 'Twitter',
      onClick: () => {
        const textWithValidLink = text.replace('@test', '@test');
        window.open(
          `http://twitter.com/share?text=${encodeURIComponent(
            textWithValidLink,
          )}`,
          '_blank',
          'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
        );
      },
    },
    {
      Icon: icons.telegram,
      content: 'Telegram',
      onClick: () => {
        window.open(
          `https://telegram.me/share/url?url=${link}&text=${text}`,
          '',
          'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
        );
      },
    },
    {
      Icon: icons.whatsapp,
      content: 'Whatsapp',
      onClick: () => {
        window.open(
          `https://wa.me?text=${encodeURIComponent(text)}`,
          '',
          'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
        );
      },
    },
    {
      Icon: icons.facebook,
      content: 'Facebook',
      onClick: () => {
        window.open(
          `https://facebook.com/sharer.php?u=${encodeURIComponent(link)}`,
          '',
          'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
        );
      },
    },
  ];
};
