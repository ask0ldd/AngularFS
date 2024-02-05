import { CanActivateFn } from '@angular/router';
import { CookiesService } from './cookies.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const cookiesService = inject(CookiesService)
  return cookiesService.isTokenAlive()
};
