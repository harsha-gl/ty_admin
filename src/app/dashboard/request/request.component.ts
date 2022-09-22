import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
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
];

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'Technologies',
    'startdate',
    'action',
  ];
  constructor() {}

  ngOnInit(): void {}
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
