import { ConfigService } from './config.service';

export const appLoader = (config: ConfigService): (() => Promise<boolean>) => {
  return (): Promise<boolean> => {
    return new Promise<boolean>(
      (resolve: (a: boolean) => void): void => {
        config
          .init()
          .then(() => resolve(true))
          .catch(err => resolve(true));
      }
    );
  };
};
