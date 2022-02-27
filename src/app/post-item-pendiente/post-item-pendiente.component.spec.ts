import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemPendienteComponent } from './post-item-pendiente.component';

describe('PostItemPendienteComponent', () => {
  let component: PostItemPendienteComponent;
  let fixture: ComponentFixture<PostItemPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemPendienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
