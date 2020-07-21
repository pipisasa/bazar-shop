import {
  HOME_PAGE,
  PRODUCTS,
} from 'constants/navigation';
const arr = [
  HOME_PAGE,
  PRODUCTS
];
export function isCategoryPage(pathname) {
  return arr.includes(pathname);
}
