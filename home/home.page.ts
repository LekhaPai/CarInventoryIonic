import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AddModelComponent } from '../add-model/add-model.component';
import { DataModelService } from '../data-model-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  addModelPage: any;

  constructor(private router: Router,
              private dataModelService: DataModelService,
              public navCtrl: NavController) {
    this.addModelPage = AddModelComponent;
  }

  addManufacturerData(form) {
    console.log(form.value.manufacturerName);
    this.dataModelService.setModelData(form.value.manufacturerName);
    this.router.navigate(['/addModel']);
  }
}
