export interface Callable<T> {
  (): Promise<T>;
}

export async function* createRunner<T>(
  tasks: Callable<T>[],
  size = 10
): AsyncGenerator<PromiseSettledResult<T>[], PromiseSettledResult<T>[], unknown> {
  const length = tasks.length;

  let runningTasks: Promise<PromiseSettledResult<T>[]>;
  let futureTasks: Promise<PromiseSettledResult<T>[]> | undefined = undefined;

  for (let i = 0, end = getEnd(length, i, size); true; end = getEnd(length, (i += size), size)) {
    runningTasks = futureTasks ?? Promise.allSettled(tasks.slice(i, end).map((t) => t()));

    await runningTasks;

    futureTasks = Promise.allSettled(tasks.slice(i + size, getEnd(length, end, size)).map((t) => t()));

    if (i + size < tasks.length) {
      yield await runningTasks;
    } else {
      return await runningTasks;
    }
  }
}

function getEnd(limit: number, current: number, increment: number) {
  return current + increment < limit ? current + increment : limit;
}
