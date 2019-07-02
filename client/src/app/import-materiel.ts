import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatBadgeModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatBadgeModule
    ],
})
export class MaterialModule { }
