import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataModelService {

  modelData: any;
  modelArray = [];

  constructor() { }

  public setModelData(data) {
    this.modelData = data;
    this.modelArray.push(data);
    console.log('model array', this.modelArray);
  }

  // public getModelData(): [string] {
  //   let manufacturerNames:[string];
  //   manufacturerNames.push(data.value)

  // }

  public getModelData(): any[] {
  return this.modelArray;

  }
}
