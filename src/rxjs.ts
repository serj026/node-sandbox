import { from, concatMap, of, delay, Observable, lastValueFrom } from 'rxjs';

async function main() {
  const observable: Observable<number> = from([1,2,3,4,5]).pipe(
    concatMap(v => of(v).pipe(delay(1000))),
  );

  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });

  await lastValueFrom(observable);
  console.log('main method done');
}

main().catch(console.error.bind(console));
