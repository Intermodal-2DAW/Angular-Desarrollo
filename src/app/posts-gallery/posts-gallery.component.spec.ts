import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsGalleryComponent } from './posts-gallery.component';

describe('PostsGalleryComponent', () => {
  let component: PostsGalleryComponent;
  let fixture: ComponentFixture<PostsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
