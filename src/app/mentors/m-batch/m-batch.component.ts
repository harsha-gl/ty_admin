import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
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
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    Technologies: '',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    Technologies: '',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    Technologies: '',
  },
];
@Component({
  selector: 'app-m-batch',
  templateUrl: './m-batch.component.html',
  styleUrls: ['./m-batch.component.css'],
})
export class MBatchComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'Technologies',
    'startdate',
    'Status',
    'Strength',
  ];

  mentorForm!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.mentorForm = this.fb.group({
      mentorname: ['', [Validators.required]],
      empid: ['', [Validators.required]],
      email: ['', [Validators.required]],
      skill: ['', [Validators.required]],
    });
  }
  submitMentorForm(data: any) {
    if (this.mentorForm.valid) {
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

  navigate() {
    this.route.navigate(['mentors/emplist']);
  }
}
