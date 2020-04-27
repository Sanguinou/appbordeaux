import {
  Component,
  OnInit
} from '@angular/core';
import {
  ModalController,
} from '@ionic/angular';
@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {


  constructor(public modalController: ModalController,) { }

  async ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  segmentClass() {
    var elementPubl = <HTMLElement>document.getElementById("publication");
    var elementDesc = <HTMLElement>document.getElementById("description");

    elementPubl.classList.toggle("invisible");
    elementDesc.classList.toggle("invisible");
  }

  
}