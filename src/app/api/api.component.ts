import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  apiUrl = 'https://et.wikipedia.org/api/rest_v1/page/summary/';
searchApi = '';
searchResult:any;
searchImage:string;


  @ViewChild('search') searchBox: ElementRef<HTMLInputElement>;

  constructor(public http: HttpClient) { }

  ngOnInit() { }

  get Overview () {
    
    

    this.http.get(this.apiUrl + searchTerm ).subscribe((res)=> {
      console.log(res);
      this.searchResult = res;
      this.searchImage = this.searchResult.thumbnail ? this.searchResult.thumbnail.source : undefined;
    })
  }
  startSearch () {
    const searchTerm = this.searchBox.nativeElement.value;
    this.http.get(this.apiUrl + searchTerm ).subscribe((res)=> {
      console.log(res);
  }
  getImageUrl (page) {
    return page.thun,nail ? page.thumbnail.source : underfined
  }
}