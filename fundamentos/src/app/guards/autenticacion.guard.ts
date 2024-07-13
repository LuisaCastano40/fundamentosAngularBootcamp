import { CanActivateFn } from '@angular/router';
import { CanDeactivateFn } from '@angular/router';

export const autenticacionGuard: CanActivateFn = (route, state) => {
  return true;
};
