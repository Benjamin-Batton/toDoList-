

class Env {
  envParams;

  getParam(param) {
    return (this.envParams[param] || '').replace(/"/g, '');
  }

  getParamAsNumber(param) {
    return Number(this.getParam(param) || 0);
  }

  getParamAsBoolean(param) {
    return this.getParam(param) === 'true';
  }

  constructor(params) {
    this.envParams = params;

    Object.entries(this.envParams).forEach(([envKey, envValue]) => {
      const paramType = typeof this[envKey];

      if (paramType === 'boolean') this[envKey] = envValue === true || envValue === 'true';
      else if (paramType === 'string') this[envKey] = (envValue || '').replace(/"/g, '').trim();
      else if (paramType === 'number') this[envKey] = Number(envValue || 0);
    });
  }

  SENTRY_URL = '';
  GIT_COMMIT = '';
  REACT_LIBRARY: `react` | `inferno` = `react`;
  HOT_RELOAD = false;
  HOT_RELOAD_PORT = 0;
  HOT_RELOAD_CLIENT_URL = '';
  USE_TS_LOADER = false;
  POLYFILLING = false;
  DROP_CONSOLE = false;
  FILENAME_HASH = false;
  CIRCULAR_CHECK = false;
  SPEED_ANALYZER = false;
  BUNDLE_ANALYZER = false;
  MINIMIZE_CLIENT = false;
  MINIMIZE_SERVER = false;
  AGGREGATION_TIMEOUT = 0;
  GENERATE_COMPRESSED = false;
  BUNDLE_ANALYZER_PORT = 0;
  SPEED_ANALYZER_SERVER = false;
  START_SERVER_AFTER_BUILD = false;
  DEV_TOOL: 'cheap-module-eval-source-map';
  DEV_TOOL_SERVER: 'cheap-module-eval-source-map';
  SESSION_DURATION = 0;
  ALLOWED_EMAILS = '';
  SESSION_SECRET = '';

  LOGS_WATCHED_FILES = false;

  CDN_ENABLED = false;
  CDN_BUCKET = '';
  CDN_ENDPOINT = '';
  CDN_BUCKET_PREFIX = '';
  CDN_ACCESS_KEY_ID = '';
  CDN_SECRET_ACCESS_KEY = '';

  NODE_ENV: `development` | `production` = `development`;
  NODE_PATH = '';
  EXPRESS_PORT = 0;
  HTTPS_BY_NODE = false;

  LOGS_GENERATE_FILES = false;
  LOGS_CDN = false;

  REDIS_PORT_6379_TCP_ADDR = '';
  REDIS_PORT_6379_TCP_PORT = 0;
}

// eslint-disable-next-line no-process-env
export const env = new Env(process.env);
