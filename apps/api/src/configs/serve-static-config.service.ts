import { Injectable } from '@nestjs/common';
import {
    ServeStaticModuleOptions, ServeStaticModuleOptionsFactory
} from '@nestjs/serve-static';
import { join } from 'path';

export const appFolder = join(__dirname, '../../..', 'dist/apps/retail-app');

@Injectable()
export class ServeStaticConfigService implements ServeStaticModuleOptionsFactory {
  constructor() {}

  createLoggerOptions(): ServeStaticModuleOptions[] {
    return [
      {
        rootPath: appFolder,
      },
    ];
  }
}