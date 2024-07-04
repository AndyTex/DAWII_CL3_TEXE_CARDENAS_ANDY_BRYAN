import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta02Component } from './pregunta02.component';

describe('Pregunta02Component', () => {
  let component: Pregunta02Component;
  let fixture: ComponentFixture<Pregunta02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pregunta02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
