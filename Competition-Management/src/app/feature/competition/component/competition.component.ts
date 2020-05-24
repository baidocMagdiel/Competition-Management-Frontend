import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Competition} from '../../home/model/competition';
import {MatTableDataSource} from '@angular/material/table';
import {CompetitionService} from '../service/competition.service';
import {Category} from '../model/category';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'ageRange', 'weightRange', 'noMembers', 'noMatches'];
  competition: Competition;
  competitionCategories: Category[];
  categoryDataSource = new MatTableDataSource<Category>([]);
  selection = new SelectionModel<Category>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
              private competitionService: CompetitionService) {
  }

  ngOnInit(): void {
    this.categoryDataSource.paginator = this.paginator;

    this.route.paramMap.subscribe((params) => {

      this.competitionService.getCompetition(params.get('id')).subscribe((data: Competition) => {
        this.competition = data;
      });

      this.competitionService.getCategories(params.get('id')).subscribe((data: Category[]) => {
        this.competitionCategories = data;
      });
    });

    this.competitionService.getAllCategory().subscribe((data: Category[]) => {
      this.categoryDataSource.data = data;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.categoryDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.categoryDataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Category): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  upate() {

  }
}
