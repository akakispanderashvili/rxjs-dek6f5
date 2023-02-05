import { of, concat, map } from 'rxjs';

const a$ = of(1, 'aa', 3);
const b$ = of(4, 5, 'bb');

const c$ = concat(
  a$.pipe(
    map((val) => {
      if (typeof val === 'number') {
        return val * 10;
      } else if (typeof val === 'string') {
        return val + val;
      }
    })
  ),
  b$.pipe(
    map((val) => {
      if (typeof val === 'number') {
        return val * 10;
      } else if (typeof val === 'string') {
        return val + val;
      }
    })
  )
);

c$.subscribe((val) => console.log(val));
