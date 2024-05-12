import { AppChangelog } from '@interfaces/common';

import {
  default_img_1, default_img_2, exclusive_img_1, exclusive_img_2,
} from '@constants/common';

// eslint-disable-next-line import/prefer-default-export
export const APP_VERSIONS: Array<AppChangelog> = [
  {
    appName: 'Default',
    descrition: 'Простой мод без каких-либо дополнительных функций.',
    images: [default_img_1, default_img_2],
    changelogs: [{
      supportAndroidVersion: '9+',
      version: '1.7.4',
      download: '', // ссылка на apk
      date: '29.02.24',
      isCurrentVersion: true,
      changes: ['1', '2', '3'],
    }],
  },
  {
    appName: 'Exclusive',
    descrition: 'Эксклюзивный мод, особенностью этого мода является Monet Тема (Material You)',
    images: [exclusive_img_1, exclusive_img_2],
    changelogs: [{
      version: '1.5',
      supportAndroidVersion: '9+',
      download: '', // ссылка на apk
      date: '11/01/23',
      isCurrentVersion: true,
      changes: ['1фффффффффф фффффффффф ффффффффффффффффф',
        '2фффффф ффффффффф', '3фффффффффффффффффффффффффффф',
        '1фффффффффф фффффффффф ффффффффффффффффф',
        '1фффффффффф фффффффффф ффффффффффффффффф',
        '1фффффффффф фффффффффф ффффффффффффффффф'],
    }],
  },
  {
    appName: 'Custom',
    descrition: 'Наш исследовательский мод, в котором может случиться немыслимое',
    images: [],
    changelogs: [{
      version: '1.5',
      download: '', // ссылка на apk
      supportAndroidVersion: '9+',
      date: '11/01/23',
      isCurrentVersion: true,
      changes: ['1', '2', '3'],
    }],
  },
];
