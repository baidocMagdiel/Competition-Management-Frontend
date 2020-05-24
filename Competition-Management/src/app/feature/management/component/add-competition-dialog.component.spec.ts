import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitionDialogComponent } from './add-competition-dialog.component';

describe('AddCompetitionDialogComponent', () => {
  let component: AddCompetitionDialogComponent;
  let fixture: ComponentFixture<AddCompetitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompetitionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
