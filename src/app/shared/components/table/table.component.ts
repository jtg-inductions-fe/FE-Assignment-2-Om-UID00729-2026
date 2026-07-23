import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { tableColumnsModel } from '@core/models/tableColumn.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() dataSource!: unknown[];
    @Input() columns!: tableColumnsModel[];
    @Input() templates: Record<string, TemplateRef<unknown>> = {};

    displayedColumns: string[] = [];

    ngOnInit(): void {
        this.displayedColumns = this.columns.map((c) => c.key);
    }
}
