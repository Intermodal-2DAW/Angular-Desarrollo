import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsShowComponent } from './posts-show/posts-show.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsNavComponent } from './posts-nav/posts-nav.component';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsBlogComponent } from './posts-blog/posts-blog.component';
import { RouterModule, Route } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsContactComponent } from './posts-contact/posts-contact.component';
import { PostsGalleryComponent } from './posts-gallery/posts-gallery.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { PostRegisterComponent } from './post-register/post-register.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostDetailService } from './resolvers/post-detail.service';
import { PostsPendientesComponent } from './posts-pendientes/posts-pendientes.component';
import { PostItemPendienteComponent } from './post-item-pendiente/post-item-pendiente.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PipeArrayPipe } from './pipes/pipe-array.pipe';

const APP_ROUTES: Route[] = [
  { path: 'posts', component: PostsHomeComponent },
  { path: 'posts/blog', component: PostsBlogComponent},
  { path: 'posts/blog/add', component: PostAddComponent},
  { path: 'posts/galeria', component: PostsGalleryComponent},
  { path: 'posts/contacto', component: PostsContactComponent},
  { path: 'posts/login', component: PostLoginComponent},
  { path: 'posts/registro', component: PostRegisterComponent},
  { path: 'posts/blogs-pendientes', component: PostsPendientesComponent},
  // :id es un parámetro (id del evento)
  { path: 'posts/blog/:id', component: PostDetailComponent, resolve: {post: PostDetailService}},
  // Ruta por defecto (vacía) -> Redirigir a /eventos
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  // Ruta que no coincide con ninguna de las anteriores
  { path: '**', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsShowComponent,
    PostItemComponent,
    PostsNavComponent,
    PostsHomeComponent,
    PostsBlogComponent,
    PostDetailComponent,
    PostsContactComponent,
    PostsGalleryComponent,
    PostLoginComponent,
    PostRegisterComponent,
    PostAddComponent,
    PostsPendientesComponent,
    PostItemPendienteComponent,
    StarRatingComponent,
    PipeArrayPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [Title,{provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
