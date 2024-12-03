import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matriz1Component } from './matriz1.component';

describe('Matriz1Component', () => {
  let component: Matriz1Component;
  let fixture: ComponentFixture<Matriz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Matriz1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matriz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
