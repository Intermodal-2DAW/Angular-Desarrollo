import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsBlogComponent } from './posts-blog.component';

describe('PostsBlogComponent', () => {
  let component: PostsBlogComponent;
  let fixture: ComponentFixture<PostsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
