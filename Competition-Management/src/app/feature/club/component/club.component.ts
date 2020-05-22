import {Component, OnInit} from '@angular/core';
import {ClubMock} from '../mock/club.mock';
import {Club} from '../model/club';
import {AthleteMock} from '../mock/athlete.mock';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  displayedColumns: string[] = ['photo', 'firstName', 'surname', 'details', 'update', 'delete'];
  club: Club[];
  athleteDataSource = new MatTableDataSource([]);

  constructor() {
  }

  ngOnInit(): void {
    this.club = ClubMock;
    this.athleteDataSource.data = AthleteMock;
  }

  openDialog(surname, firstName, id) {
    alert('Am selectat ' + id + ' ' + surname + ' ' + firstName);
  }
}


