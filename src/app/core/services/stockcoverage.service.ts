import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { EventsService } from 'angular4-events';


@Injectable()
export class StockCoverageService {
  public stockCoverageFilter: any;
  public setSurveydata: any;
  public setToastTrigger: boolean;
  public autoPopulateData: any;
  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService,
    private events: EventsService
  ) {}


  setAuth(user) {
    // Save JWT sent from server in localstorage
       this.jwtService.saveToken(user);
  }

  unSetAuth() {
    // Save JWT sent from server in localstorage
       this.jwtService.destroyToken();
  }

  setStockCoverageParam(data) {
    this.stockCoverageFilter = data;
  }

  getStockCoverageParam() {
    return this.stockCoverageFilter;
  }

  setRemoveCompanyCode(code) {
    this.stockCoverageFilter.removeCompanyCode.push(code);
  }

  setAddCompanyCode(code) {
    const filterindex = this.stockCoverageFilter.addCompanyCode.indexOf(code);
    if (filterindex > -1) {
      this.stockCoverageFilter.addCompanyCode.splice(filterindex, 1);
    } else {
      this.stockCoverageFilter.addCompanyCode.push(code);
    }
    this.getListStockStatus().subscribe(data => {
      this.autoPopulateData = data;
      this.events.publish('stockCoverageAutoPopulate');
    });
  }

  setSurveydocument(surveyData) {
    this.stockCoverageFilter = surveyData;
  }

  getSurveydocument() {
    return this.stockCoverageFilter;
  }

  setFilterAtStart(data) {
    this.stockCoverageFilter  = data;
  }

  setTostTrigger() {
    this.setToastTrigger = true;
  }

  unSetTostTrigger() {
    this.setToastTrigger = false;
  }
  getToastTrigger() {
    return this.setToastTrigger;
  }

  setAutoPopulateData(data) {
    this.autoPopulateData = data;
  }
  getAutoPopulateData() {
    return this.autoPopulateData.data.company;
  }

  getStockCoverageList() {
    return this.apiService.get(`/listSectorCoverage`);
  }

  getListStockStatus() {
      return this.apiService.post('/listStockStatus' ,   this.stockCoverageFilter);
  }

  getCompanyList() {
      return this.apiService.get(`/companyList`);
  }

  updateStep(step) {
      return this.apiService.post('/updateStep' ,   step);
  }

  checkToken() {
      return this.apiService.post(`/checkToken`);
  }

  getSurveyDetails() {
      return this.apiService.get(`/getSurveyDetails`);
  }

  saveSurveyData(setSurveyData) {
      return this.apiService.post('/addSurvey' ,   setSurveyData);
  }
}
