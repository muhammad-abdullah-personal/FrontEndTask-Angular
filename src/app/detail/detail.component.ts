import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JarwisService} from '../providers/jarwis.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public id: any;
  public store: any;
  public loaded: boolean = false;

  constructor(private route: ActivatedRoute, private jarwis: JarwisService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getStoreDetail(this.id);
  }
  getStoreDetail(id) {
    this.jarwis.getStoreDetail(id).subscribe(res => {
      console.log(res);
      this.loaded = true;
      this.store = res;
    }, error => {
      console.log(error);
    });
  }

}
