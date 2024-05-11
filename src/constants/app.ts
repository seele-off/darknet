import { AppChangelog } from '@interfaces/common';

import { PHONE_IMAGE } from './common';

// eslint-disable-next-line import/prefer-default-export
export const APP_VERSIONS: Array<AppChangelog> = [
  {
    appName: 'Default',
    descrition: 'Test Простой мод без каких-либо дополнительных функций.',
    images: [PHONE_IMAGE, PHONE_IMAGE, PHONE_IMAGE, PHONE_IMAGE],
    changelogs: [{
      supportAndroidVersion: '9+',
      version: 1.6,
      download: '', // ссылка на apk
      date: '11/01/23',
      isCurrentVersion: true,
      changes: ['1', '2', '3'],

    },
    {
      version: 1.5,
      supportAndroidVersion: '9+',
      download: '', // ссылка на apk
      date: '11/01/23',
      changes: ['1', '2', '3'],
    }],
  },
  {
    appName: 'Exclusive',
    descrition: 'Эксклюзивный мод, особенностью этого мода является Monet Тема (Material You)',
    images: [],
    changelogs: [{
      version: 1.5,
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
    images: [PHONE_IMAGE, PHONE_IMAGE, PHONE_IMAGE, PHONE_IMAGE],
    changelogs: [{
      version: 1.5,
      download: '', // ссылка на apk
      supportAndroidVersion: '9+',
      date: '11/01/23',
      isCurrentVersion: true,
      changes: ['1', '2', '3'],
    }],
  },
];
