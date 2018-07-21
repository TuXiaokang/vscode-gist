import { ExtensionContext, extensions } from './modules/vscode';
import { logger } from './logger';

export function activate(context: ExtensionContext) {
  const { name: pkg, version } = extensions.getExtension('kenhowardpdx.vscode-gist').packageJSON;
  const l = logger({ pkg, version });

  l.info('extension started');
}
