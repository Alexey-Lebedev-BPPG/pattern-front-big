export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);
  const filterParam = Object.entries(params);
  filterParam.forEach(([name, value]) => {
    if (value !== undefined) searchParams.set(name, value);

    if (!value?.length) searchParams.delete(name);
  });

  return `?${searchParams.toString()}`;
}

export function createQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}
