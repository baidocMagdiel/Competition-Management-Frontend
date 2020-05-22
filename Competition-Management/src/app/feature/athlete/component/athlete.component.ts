import {Component, OnInit} from '@angular/core';
import {Athlete} from '../../club/model/athlete';
import {AthleteMock} from '../../club/mock/athlete.mock';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {

  displayedColumns: string[] = ['competition', 'category', 'rank', 'points'];
  athlete: Athlete[];
  historyDataSource = new MatTableDataSource([]);

  constructor() {
  }

  ngOnInit(): void {
    this.athlete = AthleteMock;
    this.historyDataSource.data = AthleteMock;
  }

}
