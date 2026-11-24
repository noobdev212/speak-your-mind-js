
export const LogLevel = {
  INFO: 'info',
  DEBUG: 'debug',
  WARN: 'warn',
  ERROR: 'error'
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

export function log(funcName: string, msg: string, level: LogLevel,): void {
  const formatter = `${funcName} ${new Date().toUTCString()}`;

  switch(level) {
    case LogLevel.INFO:
      console.info(`${formatter} [INFO] - ${msg}`);
      break;
    case LogLevel.DEBUG:
      console.debug(`${formatter} [DEBUG] - ${msg}`);
      break;
    case LogLevel.WARN:
      console.warn(`${formatter} [WARN] - ${msg}`);
      break;
    case LogLevel.ERROR:
      console.error(`${formatter} [ERROR] - ${msg}`);
      break;
    default:
      throw new Error('logger: invalid case type');
  }
}
