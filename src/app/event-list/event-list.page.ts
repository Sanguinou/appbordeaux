import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { EventPage } from '../event/event.page';

@Component({
  selector: 'app-event',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EventPage,
    });
    return await modal.present();
  }

}
