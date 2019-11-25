import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAutoresComponent } from './crear-autores.component';

describe('CrearAutoresComponent', () => {
  let component: CrearAutoresComponent;
  let fixture: ComponentFixture<CrearAutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
