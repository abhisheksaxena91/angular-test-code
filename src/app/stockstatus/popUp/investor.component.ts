import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Errors, StockCoverageService } from '../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investorpopup.scss']
})
export class InvestorComponent implements OnInit {
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectValueChange: EventEmitter<Number> = new EventEmitter<Number>();
  @Input() selectorIndex: Number;
  public storeCompanyCode = [];
  constructor( private stockcoverageService: StockCoverageService, private toastr: ToastrService) {
  }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onChange(event) {
    this.selectValueChange.emit(+event.value);
  }

}
