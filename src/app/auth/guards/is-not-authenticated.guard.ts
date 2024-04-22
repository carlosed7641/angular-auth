import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { AuthStatus } from '../interfaces'

export const isNotAuthenticadedGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.authStatus() === AuthStatus.notAuthenticated) return true

  // if (authService.authStatus() === AuthStatus.checking) return false

  router.navigateByUrl('/dashboard')

  // const url = state.url
  // localStorage.setItem('url', url)

  return false


}
