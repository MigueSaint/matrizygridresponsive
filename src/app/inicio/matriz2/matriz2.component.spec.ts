import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matriz2Component } from './matriz2.component';

describe('Matriz2Component', () => {
  let component: Matriz2Component;
  let fixture: ComponentFixture<Matriz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Matriz2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matriz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
