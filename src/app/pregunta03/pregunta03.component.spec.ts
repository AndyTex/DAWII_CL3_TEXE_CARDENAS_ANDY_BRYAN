import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta03Component } from './pregunta03.component';

describe('Pregunta03Component', () => {
  let component: Pregunta03Component;
  let fixture: ComponentFixture<Pregunta03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pregunta03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
