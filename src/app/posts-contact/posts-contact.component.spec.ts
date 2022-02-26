import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsContactComponent } from './posts-contact.component';

describe('PostsContactComponent', () => {
  let component: PostsContactComponent;
  let fixture: ComponentFixture<PostsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
