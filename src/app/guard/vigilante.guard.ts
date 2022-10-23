import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { auth } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => {
        let parseUser = null
        if (user) {
          parseUser = user.toJSON()
          console.log(parseUser)
        }else{
          this.router.navigateByUrl('/login')
        }
        resolve(parseUser)
      }, reject)
    })
  }

  
  
}
