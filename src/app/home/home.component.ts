import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../providers/jarwis.service';
import {PagerService} from '../providers/pager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public stores: any [];
  public tempStores: any [];
  public page: number;
  public count: number;
  public loaded: boolean = false;
  pager: any = {};
  pagedItems: any[];
  public filter: any;
  public typeSelected: boolean = false;
  public type;


  constructor(private jarwis: JarwisService, private pagerService: PagerService, private router: Router) { }

  ngOnInit() {

    this.setPage(1);
  }

  setPage(page: number) {
    this.loaded = false;
    this.jarwis.getStores(page).subscribe((response: any) => {
      console.log(response);
      this.stores = response.results;
      this.count = response.count;
      // get pager object from service
      this.pager = this.pagerService.getPager(this.count, page);

      // get current page of items
      console.log(this.pagedItems);
      this.pager.startIndex = 0;
      this.pager.endIndex = this.stores.length - 1;
      this.pagedItems = this.stores.slice(this.pager.startIndex, this.pager.endIndex + 1);
      console.log(this.pagedItems);
      this.loaded = true;
    }, error => {
      console.error(error);
    });
  }

  setPage2(page: number, type) {
    console.log(page, type);
    this.loaded = false;
    this.jarwis.getStoresbyType(page, type).subscribe((response: any) => {
      console.log(response);
      this.stores = response.results;
      this.count = response.count;
      // get pager object from service
      this.pager = this.pagerService.getPager(this.count, page);

      // get current page of items
      console.log(this.pagedItems);
      this.pager.startIndex = 0;
      this.pager.endIndex = this.stores.length - 1;
      this.pagedItems = this.stores.slice(this.pager.startIndex, this.pager.endIndex + 1);
      console.log(this.pagedItems);
      this.loaded = true;
    }, error => {
      console.error(error);
    });
  }

  storeDetail(store) {
   this.router.navigateByUrl(`/detail/${store.id}`);
  }

  filterResult(type) {
    this.typeSelected = true;
    this.type = type;
    this.setPage2(1, type);
    // this.pagedItems = [];
    // for(let i in this.stores) {
    //   if(this.stores[i].type === type) {
    //     this.pagedItems.push(this.stores[i]);
    //   }
    // }
  }

}
