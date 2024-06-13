import { AppChangelog } from '@interfaces/common';

import {
  default_img_1,
  default_img_2,
  exclusive_img_1,
  exclusive_img_2,
} from '@constants/common';

export const APP_VERSIONS: Array<AppChangelog> = [
  {
    appName: 'Default',
    descrition: 'Простой мод без каких-либо дополнительных функций.',
    images: [
        default_img_1,
        default_img_2,
      ],
    changelogs: [{
      version: '1.0',
      date: '20/05/24',
      isCurrentVersion: true,
      supportAndroidVersion: '9+',
      download: 'https://github.com/seele-off/anixart/releases/download/anixart-default/Anixart-Default-v1.0-by-Seele.apk', // ссылка на apk
      changes: [
        'Без рекламы',
        'Корона в профиле 👑',
        'Добавлена тематическая иконка',
        'Добавлено новое расширение "MD Seele v3.0"',
        'Расширение предназначено для просмотра запрещенных аниме',
        'Kodik без рекламы и доступен в разрешении 720p',
        'Весь мусор внутри приложения удален', 'Monet Иконки',
      ],
    }],
  },
  {
    appName: 'Exclusive',
    descrition: 'Эксклюзивный мод, особенностью этого мода является Monet Тема (Material You)',
    images: [
        exclusive_img_1,
        exclusive_img_2
      ],
    changelogs: [{
      version: '1.0',
      date: '20/05/24',
      isCurrentVersion: true,
      supportAndroidVersion: '12+',
      download: 'https://github.com/seele-off/anixart/releases/download/anixart-exclusive/Anixart-Exclusive-v1.0-by-Seele.apk', // ссылка на apk
      changes: [
        'Без рекламы',
        'Корона в профиле 👑',
        'Monet Theme (Material You)',
        'Добавлена тематическая иконка',
        'Добавлено новое расширение "MD Seele v3.0"',
        'Расширение предназначено для просмотра запрещенных аниме'
      ],
    }],
  },
  ];
