import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Competition} from '../../home/model/competition';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-competition-dialog',
  templateUrl: './add-competition-dialog.component.html',
  styleUrls: ['./add-competition-dialog.component.css']
})
export class AddCompetitionDialogComponent implements OnInit {

  competitionForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    place: new FormControl( ''),
    federation: new FormControl(''),
    startDate: new FormControl( new Date()),
    endDate: new FormControl( new Date()),
    lastRegistrationDate: new FormControl( new Date()),
    noOfEntries: new FormControl(0),
    noOfCountries: new FormControl(0),
    competitionStatus: new FormControl(''),
  });

  constructor(private dialogRef: MatDialogRef<AddCompetitionDialogComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const competition: Competition = {
      name: this.competitionForm.get(['name']).value,
      place: this.competitionForm.get(['place']).value,
      federation: this.competitionForm.get(['federation']).value,
      startDate: this.competitionForm.get(['startDate']).value,
      endDate: this.competitionForm.get(['endDate']).value,
      lastRegistrationDate: this.competitionForm.get(['lastRegistrationDate']).value,
      noOfEntries: this.competitionForm.get(['noOfEntries']).value,
      noOfCountries: this.competitionForm.get(['noOfCountries']).value,
      competitionStatus: this.competitionForm.get(['competitionStatus']).value,
    };
    this.dialogRef.close(competition);
  }

  onClose(){
    this.dialogRef.close();
  }

}
