import char from './char';
import Team from './Team';

const arrayChar = [{ ...char }, { ...char }, { ...char }, { ...char }];
const team = new Team(arrayChar);

/* eslint-disable-next-line */
for (const item of team) {
  console.log(item);
}
