// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce(fn: Function, delay: number): Function {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
