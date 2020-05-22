import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CompetitionMock} from '../mock/competition.mock';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Competition} from '../model/competition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'place', 'federation', 'competitionStatus'];
  competitionDataSource = new MatTableDataSource([]);
  expandedElement: Competition | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() {
  }

  ngOnInit(): void {
    this.competitionDataSource.data = CompetitionMock;
    this.competitionDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.competitionDataSource.filter = filterValue.trim().toLowerCase();
  }

}
