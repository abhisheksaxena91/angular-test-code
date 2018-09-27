import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Errors, StockCoverageService } from '../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialogpopup.scss']
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() showJsonData: any;
  @Input() data: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  public storeCompanyCode = [];
  constructor( private stockcoverageService: StockCoverageService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.stockcoverageService.getCompanyList().subscribe((res: any) => {
      // this.dropdownList = res.data;
      res.data.map(val => {
          this.dropdownList.push({'id': val._id, 'itemName': val.companyCode, 'name': val.companyName});
      });
    });

this.selectedItems = [

    ];
this.dropdownSettings = {
          singleSelection: false,
          text: 'Select Company code',
          enableSearchFilter: true,
          classes: 'myclass custom-class multiselectangular2'
        };
   }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onItemSelect(item: any) {
    // this.stockcoverageService.setAddCompanyCode(item.itemName);
    const filterindex = this.storeCompanyCode.indexOf(item.itemName);
    if (filterindex > -1) {
      this.storeCompanyCode.splice(filterindex, 1);
    } else {
      this.storeCompanyCode.push(item.itemName);
    }
  }

  OnItemDeSelect(item: any) {
    this.stockcoverageService.setAddCompanyCode(item.itemName);
    this.toastr.error('Stock removed');
  }

  addCompanyCode() {
      this.toastr.clear();
    if (this.storeCompanyCode.length > 0) {
        this.storeCompanyCode.map(val => { this.stockcoverageService.setAddCompanyCode(val); });
        this.close();
        this.toastr.success('Stock added successfully');
    } else {
        this.toastr.success('No stock is selected');
    }
  }
}
