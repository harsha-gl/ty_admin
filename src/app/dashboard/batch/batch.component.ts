import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Technologies: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    Technologies: '',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    Technologies: '',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    Technologies: '',
  },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', Technologies: '' },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    Technologies: '',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    Technologies: '',
  },
];

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
})
export class BatchComponent implements OnInit {
  // selection: any;
  // dataSource: any;
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'Technologies',
    'startdate',
    'enddate',
    'Status',
    'Action',
  ];
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
  ];
  batchForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.batchForm = this.fb.group({
      batchname: ['', [Validators.required]],
      mentorname: ['', [Validators.required]],
      technologies: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
    });
  }

  submitForm(data: any) {
    if (this.batchForm.valid) {
      console.log(data.value);
    }
  }

  dataSource: any = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection: any = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
