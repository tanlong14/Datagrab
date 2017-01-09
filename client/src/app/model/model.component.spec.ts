import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { ModelComponent } from './model.component';

describe('Model component', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      ModelComponent
    ]
  }));

  it('Implémente function ngOnInit', inject([ModelComponent], (component: ModelComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

  it('Implémente function getName', inject([ModelComponent], (component: ModelComponent) => {
    component.ngOnInit();
    expect(component.getName()).toBeDefined();
  }));

  it('La function getName retourne une valeur', inject([ModelComponent], (component: ModelComponent) => {
    component.ngOnInit();
    var name = component.getName();
    expect(name).toBeTruthy();
  }));
});
