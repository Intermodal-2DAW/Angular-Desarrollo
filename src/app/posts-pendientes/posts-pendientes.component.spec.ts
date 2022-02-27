import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPendientesComponent } from './posts-pendientes.component';

describe('PostsPendientesComponent', () => {
  let component: PostsPendientesComponent;
  let fixture: ComponentFixture<PostsPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
