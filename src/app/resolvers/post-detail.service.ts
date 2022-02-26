import { Injectable, Input } from '@angular/core';
import { IPosts } from '../interfaces/i-posts';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService implements Resolve<IPosts>{

  constructor(private postsService: PostsService, private router: Router) { }
  @Input() post:IPosts;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<IPosts> {
    const id = +route.params['id'];
    return this.postsService.getPost(id).pipe(
      catchError(e => { this.router.navigate(['/posts/blog']); return of(this.post);})
    );
  }
}
