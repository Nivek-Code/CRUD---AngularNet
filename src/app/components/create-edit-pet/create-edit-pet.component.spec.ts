import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditPetComponent } from './create-edit-pet.component';

describe('CreateEditPetComponent', () => {
  let component: CreateEditPetComponent;
  let fixture: ComponentFixture<CreateEditPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
