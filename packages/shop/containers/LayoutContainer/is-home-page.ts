import {
  HOME_PAGE,
  MEN,
  WOMEN,
  KIDS
} from 'constants/navigation';
const arr = [
  HOME_PAGE,
  MEN,
  WOMEN,
  KIDS
];
export function isCategoryPage(pathname) {
  return arr.includes(pathname);
}
