import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Competition} from '../../home/model/competition';
import {MatSort} from '@angular/material/sort';
import {HomeService} from '../../home/service/home.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddCompetitionDialogComponent} from './add-competition-dialog.component';
import {CompetitionManagementService} from '../service/competition-management.service';

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
  competitions: Competition[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private homeService: HomeService,
              public dialog: MatDialog,
              private competitionManagementService: CompetitionManagementService) {
  }

  ngOnInit(): void {

    this.homeService.getall().subscribe((data: Competition[]) => {
      this.competitions = data;
      this.competitionDataSource.data =  this.competitions;
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '700px';

    const dialogRef = this.dialog.open(AddCompetitionDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((newCompetition: Competition) => {
      if (newCompetition){
        this.competitionManagementService.createCompetition(newCompetition).subscribe(
          (competition) => {
            this.competitions = this.competitionManagementService.appendNewComponent(this.competitions, competition);
            this.competitionDataSource.data = this.competitions;
          }
        );
      }
    });
  }
}
