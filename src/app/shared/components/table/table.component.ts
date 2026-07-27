import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { tableColumnsModel } from './models/tableColumn.model';
import { HEADING_ALIGNMENTS } from './constants/heading-alignments';
import { HEADING_ALIGNMENT_CLASS_MAP } from './constants/heading-alignment-class-map';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
    @Input() dataSource!: unknown[];
    @Input() columns!: tableColumnsModel[];
    @Input() templates: Record<string, TemplateRef<unknown>> = {};

    displayedColumns: string[] = [];

    ngOnInit(): void {
        this.displayedColumns = this.columns.map((c) => c.key);
    }

    trackByColumns(index: number, column: tableColumnsModel): string {
        return column.key;
    }

    getHeadingAlignment(
        headingAlignment: HEADING_ALIGNMENTS | undefined,
    ): string {
        if (headingAlignment) {
            return HEADING_ALIGNMENT_CLASS_MAP[headingAlignment];
        }
        return '';
    }
}
