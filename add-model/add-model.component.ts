import { Component, OnInit } from '@angular/core';
import { DataModelService } from '../data-model-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss'],
})
export class AddModelComponent implements OnInit {
  manufacturerNames = [];

  constructor(private dataModelService: DataModelService,
              private router: Router) {
    console.log('Manufacturer Data', this.dataModelService.getModelData(), this.dataModelService.getModelData().length);
    this.manufacturerNames = [...this.dataModelService.getModelData()];
  }

  ngOnInit() { }

  addCarModelData(form) {

    this.router.navigate(['/inventoryDetails']);
  }


}
