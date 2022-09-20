
interface Result {
  protocol?: string;
  host?: string;
  port?: string;
  path?: string;
}

export function isURL(url: string) {
  return /^(?<protocol>.+):\/\//.test(url);
}

export function parseURL(url: string): Result {
  // eslint-disable-next-line no-useless-escape
  const regexp = /^(?<protocol>.+):\/\/(?<host>[\w\d\.-]+)?(:(?<port>\d{1,4}))?(?<path>\/.*)?$/;
  const groups = url.match(regexp)?.groups;
  if (groups) {
    return { ...groups };
  } else {
    return {
      path: url,
    };
  }
}

export function stringifyURL({ protocol, host, port, path = '' }: Result): string {
  return `${ protocol }://${ host ? `${ host }${ port ? `:${ port }` : '' }` : '' }${ path }`;
}
