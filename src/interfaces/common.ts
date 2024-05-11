export type AppChanges = {
  date: string;
  version: number;
  download: string;
  changes: Array<string>;
  supportAndroidVersion: string;
  isCurrentVersion?: boolean;
};

export type AppChangelog = {
  appName: string;
  descrition: string;
  images: Array<string>;
  changelogs: Array<AppChanges>;
};
