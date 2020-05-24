import {Component, OnInit} from '@angular/core';
import {ClubMock} from '../mock/club.mock';
import {Club} from '../model/club';
import {MatTableDataSource} from '@angular/material/table';
import {ClubService} from '../service/club.service';
import {Athlete} from '../model/athlete';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  displayedColumns: string[] = ['photo', 'firstName', 'surname', 'details', 'delete'];
  club: Club[];
  athleteDataSource = new MatTableDataSource([]);

  constructor(private clubService: ClubService) {
  }

  ngOnInit(): void {

    this.clubService.getAthletes().subscribe((data: Athlete[]) => {
      this.athleteDataSource.data = data;
    });
    this.club = ClubMock;
  }

  delete(personId): void {
    this.clubService.deleteAthlete(personId).subscribe();
  }

  openDialog(surname, firstName, id) {
    alert('Am selectat ' + id + ' ' + surname + ' ' + firstName);
  }
}


