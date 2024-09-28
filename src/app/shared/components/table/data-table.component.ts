import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'datatables.net';
import DataTable from 'datatables.net-dt';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent implements OnInit, AfterViewInit, OnChanges {
  constructor(private router: Router, private authService: AuthService) {}

  @Input('data') data: object[];
  @Input('columnsOptions') columnsOptions: any;
  @Input('colReportsFilter') colReportsFilter: any[];
  @ViewChild('dataTable') table: ElementRef;

  dataTable: any = new DataTable('', {});
  dtOptions: Config = {};

  // Update data in table
  updateTableData(newData: any[]): void {
    this.dataTable.clear();
    this.dataTable.rows.add(newData);
    this.dataTable.draw();
  }

  initTableOptions(cols) {
    let columns = [];
    for (let c in cols) {
      if (c.includes('ref')) {
        columns.push(cols[c]);
        continue;
      }
      columns.push({ title: cols[c], data: c });
    }
    // init options
    this.dtOptions = {
      data: this.data,
      columns: columns,
      layout: {
        topStart: {},
        topEnd: {},
      },
      language: {
        paginate: {
          first: '',
          last: '',
        },
      },
    };
  }

  ngOnInit(): void {
    this.initTableOptions(this.columnsOptions);
  }

  ngAfterViewInit(): void {
    this.dataTable = new DataTable(this.table.nativeElement, this.dtOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateTableData(this.data);
  }
}
