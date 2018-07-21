import chalk from 'chalk';

interface Logger {
  error: (msg) => void;
  info: (msg) => void;
  log: (msg) => void;
  warn: (msg) => void;
}

let l: Logger;
let version = '0.0.0';
let pkg = 'unknown';

function formattedMsg(method: string, pkg: string, version: string, msg: string) {
  const logPrefix = `${pkg}@${version} :`;

  console[method](`${logPrefix} ${msg}`);
}

export function logger(config: { pkg?: string; version?: string } = { pkg, version }) {
  pkg = config.pkg || pkg;
  version = config.version || version;
  if (!l) {
    l = {
      error(msg) {
        formattedMsg('error', pkg, version, chalk.red(msg));
      },
      info(msg) {
        formattedMsg('info', pkg, version, chalk.blue(msg));
      },
      log(msg) {
        formattedMsg('log', pkg, version, chalk.cyan(msg));
      },
      warn(msg) {
        formattedMsg('warn', pkg, version, chalk.magenta(msg));
      },
    };
  }
  return l;
}
