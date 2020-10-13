import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-login--container';

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
