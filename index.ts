import {
  of,
  map,
  interval,
  filter,
  Observable,
  delay,
  take,
  concatWith,
} from 'rxjs';

// 1)))
//
//
const a$ = of(1, 'aa', 3);
const b$ = of(4, 5, 'bb');

const c$ = a$.pipe(concatWith(b$)).pipe(
  map((val) => {
    if (typeof val === 'number') {
      return val * 10;
    } else if (typeof val === 'string') {
      return val + val;
    }
  })
);

c$.subscribe((val) => console.log(val));

// 2)))
//
//
const stream$ = interval(1000).pipe(
  filter((value) => value % 2 === 0),
  take(6),
  map((value) => value * 2)
);

// stream$.subscribe((value) => console.log(value));

// 3)))
//
//
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function getUsers(): Observable<String[]> {
  const users: User[] = [
    { firstName: 'giorgi', lastName: 'bazerashvili', age: 25 },
    { firstName: 'meore', lastName: 'giorgi', age: 17 },
    { firstName: 'valeri', lastName: 'valeria', age: 21 },
    { firstName: 'giga', lastName: 'gigaia', age: 16 },
    { firstName: 'giga', lastName: 'gigaiaze', age: 96 },
  ];

  return of(users).pipe(
    map((users) => users.filter((user) => user.age >= 18)),
    map((users) =>
      users.map(
        (user) => `${user.firstName} ${user.lastName}, ${user.age} years old`
      )
    ),
    delay(5000)
  );
}

// getUsers().subscribe((users) => {
//   users.forEach((user) => console.log(user));
// });
