import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Competition} from '../../home/model/competition';
import {MatTableDataSource} from '@angular/material/table';
import {CompetitionService} from '../service/competition.service';
import {Category} from '../model/category';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl, FormGroup} from '@angular/forms';

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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
              private competitionService: CompetitionService) {
  }

  ngOnInit(): void {
    this.categoryDataSource.paginator = this.paginator;

    this.route.paramMap.subscribe((params) => {

      this.competitionService.getCompetition(params.get('id')).subscribe((competition: Competition) => {
        this.competition = competition;
        this.competitionForm.patchValue(competition);
        this.competitionForm.get(['startDate']).setValue(new Date(competition.startDate));
        this.competitionForm.get(['endDate']).setValue(new Date(competition.endDate));
        this.competitionForm.get(['lastRegistrationDate']).setValue(new Date(competition.lastRegistrationDate));
       /*
        competition.categories.forEach((category) => {
          this.selection.select(category);
        });
        */
        console.log(competition.categories);
      });

      this.competitionService.getCategories(params.get('id')).subscribe((categories: Category[]) => {
        this.competitionCategories = categories;
      });
    });

    this.competitionService.getAllCategory().subscribe((categories: Category[]) => {
      this.categoryDataSource.data = categories;
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

  update() {
    const competition: Competition = {
      competitionId: this.competition.competitionId,
      name: this.competitionForm.get(['name']).value,
      place: this.competitionForm.get(['place']).value,
      federation: this.competitionForm.get(['federation']).value,
      startDate: this.competitionForm.get(['startDate']).value,
      endDate: this.competitionForm.get(['endDate']).value,
      lastRegistrationDate: this.competitionForm.get(['lastRegistrationDate']).value,
      noOfEntries: this.competitionForm.get(['noOfEntries']).value,
      noOfCountries: this.competitionForm.get(['noOfCountries']).value,
      competitionStatus: this.competitionForm.get(['competitionStatus']).value,
      categories: this.selection.selected
    };
    this.competitionService.updateCompetition(competition).subscribe((newCompetition) => {
      console.log(newCompetition);
    });
  }
}
