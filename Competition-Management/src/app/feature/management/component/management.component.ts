import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Competition} from '../../home/model/competition';
import {MatSort} from '@angular/material/sort';
import {HomeService} from '../../home/service/home.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManagementComponent implements OnInit {
  displayedColumns: string[] = ['name', 'place', 'federation', 'competitionStatus', 'edit', 'delete'];
  competitionDataSource = new MatTableDataSource([]);
  expandedElement: Competition | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  Pending = 'Pending';
  Open = 'Open';

  constructor(private homeService: HomeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.homeService.getall().subscribe((data: Competition[]) => {
      this.competitionDataSource.data = data;
    });

    this.competitionDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.competitionDataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(competitionId) {
    alert('Se sterge competitia cu id-ul ' + competitionId);
  }

  openDialog(): void {

  }
}
