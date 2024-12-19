import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagWebComponent } from './pag-web.component';

describe('PagWebComponent', () => {
  let component: PagWebComponent;
  let fixture: ComponentFixture<PagWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
