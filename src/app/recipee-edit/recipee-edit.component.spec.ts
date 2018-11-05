import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeEditComponent } from './recipee-edit.component';

describe('RecipeeEditComponent', () => {
  let component: RecipeeEditComponent;
  let fixture: ComponentFixture<RecipeeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
