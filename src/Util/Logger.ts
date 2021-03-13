import log4js from 'log4js';
log4js.configure(
    {
      appenders: {
        file: {
          type: 'file',
          filename: 'logs/noteblock.log',
          maxLogSize: 10 * 1024 * 1024,
          backups: 5, 
          compress: true,
          encoding: 'utf-8',
          mode: 0o0640,
          flags: 'w+'
        },
        dateFile: {
          type: 'dateFile',
          filename: 'logs/noteblock.log',
          pattern: 'hh-dd-MM-yyyy',
          compress: true
        },
        out: {
          type: 'stdout'
        }
      },
      categories: {
        default: { appenders: ['file', 'dateFile', 'out'], level: 'info' }
      }
    }
  );
export const logger = log4js.getLogger('NOTEBLOCK')