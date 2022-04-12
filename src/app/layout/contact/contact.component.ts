import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name: string = "";
  public email: string = "";
  public message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail() {
    if (this.name.length > 0 && this.email.length > 0 && this.message.length > 0) {
      (<HTMLElement>document.getElementById("myModal")).style.display = "block";
    } else {
      (<HTMLElement>document.getElementById("myModal2")).style.display = "block";
    }
  }

  public closeModal() {
    (<HTMLElement>document.getElementById("myModal")).style.display = "none";
    (<HTMLElement>document.getElementById("myModal2")).style.display = "none";
  }

}
