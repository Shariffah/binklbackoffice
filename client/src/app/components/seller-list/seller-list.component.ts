import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
    nom: number;
    pays: string;
    date: number;
    salaire: string;
    bbbb: string;
    aaaa: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { nom: 1, pays: 'Hydrogen', date: 1.0079, salaire: 'H', bbbb: '', aaaa: '' },
    { nom: 2, pays: 'Helium', date: 4.0026, salaire: 'He', bbbb: '', aaaa: '' },
    { nom: 3, pays: 'Lithium', date: 6.941, salaire: 'Li', bbbb: '', aaaa: '' },
    { nom: 4, pays: 'Beryllium', date: 9.0122, salaire: 'Be', bbbb: '', aaaa: '' },
    { nom: 5, pays: 'Boron', date: 10.811, salaire: 'B', bbbb: '', aaaa: '' },
    { nom: 6, pays: 'Carbon', date: 12.0107, salaire: 'C', bbbb: '', aaaa: '' },
    { nom: 7, pays: 'Nitrogen', date: 14.0067, salaire: 'N', bbbb: '', aaaa: '' },
    { nom: 8, pays: 'Oxygen', date: 15.9994, salaire: 'O', bbbb: '', aaaa: '' },
    { nom: 9, pays: 'Fluorine', date: 18.9984, salaire: 'F', bbbb: '', aaaa: '' },
    { nom: 10, pays: 'Neon', date: 20.1797, salaire: 'Ne', bbbb: '', aaaa: '' },
    { nom: 11, pays: 'Hydrogen', date: 1.0079, salaire: 'H', bbbb: '', aaaa: '' },
    { nom: 12, pays: 'Helium', date: 4.0026, salaire: 'He', bbbb: '', aaaa: '' },
    { nom: 13, pays: 'Lithium', date: 6.941, salaire: 'Li', bbbb: '', aaaa: '' },
    { nom: 14, pays: 'Beryllium', date: 9.0122, salaire: 'Be', bbbb: '', aaaa: '' },
    { nom: 15, pays: 'Boron', date: 10.811, salaire: 'B', bbbb: '', aaaa: '' },
    { nom: 16, pays: 'Carbon', date: 12.0107, salaire: 'C', bbbb: '', aaaa: '' },
    { nom: 17, pays: 'Nitrogen', date: 14.0067, salaire: 'N', bbbb: '', aaaa: '' },
    { nom: 18, pays: 'Oxygen', date: 15.9994, salaire: 'O', bbbb: '', aaaa: '' },
    { nom: 19, pays: 'Fluorine', date: 18.9984, salaire: 'F', bbbb: '', aaaa: '' },
    { nom: 20, pays: 'Neon', date: 20.1797, salaire: 'Ne', bbbb: '', aaaa: '' },
];

@Component({
    selector: 'app-seller-list',
    templateUrl: './seller-list.component.html',
    styleUrls: ['./seller-list.component.scss']
})
export class SellerListComponent implements OnInit {

    rowSelected: number[] = [];

    displayedColumns: string[] = ['select', 'nom', 'pays', 'date', 'salaire', 'bbbb', 'aaaa'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
    constructor() { }

    ngOnInit() {
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nom + 1}`;
    }

    OnclickCheckbox($event, idRow, isSelectedRow) {
        $event.stopPropagation();
        if (isSelectedRow) {
            const i = this.rowSelected.indexOf(idRow);
            this.rowSelected.splice(i);
        } else {
            this.rowSelected.push(idRow);
        }
    }

    AllSelectedCheckbox(IsSelectedRow) {
        this.rowSelected = [];
    }

}
