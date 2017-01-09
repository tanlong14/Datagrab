import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'model',
  viewProviders: [Title],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './model.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './model.component.html'  
})
export class ModelComponent implements OnInit {
  private nameModule: string = "Model";
 
  localState: any;
  constructor(public route: ActivatedRoute, public title: Title) {
    //title.setTitle(this.getName());
  }

  getName() {
    return this.nameModule;
  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('ngOnInit ' + this.nameModule + ' component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
