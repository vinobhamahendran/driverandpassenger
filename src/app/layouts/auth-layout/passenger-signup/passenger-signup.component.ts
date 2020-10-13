import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-passenger-signup',
  templateUrl: './passenger-signup.component.html',
  styleUrls: ['./passenger-signup.component.scss']
})
export class PassengerSignupComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-login--container';

  constructor(private router:Router,private modalService:NgbModal) { }
  onSubmit(){
    const ref= this.modalService.open(OtpComponent);
  }
  ngOnInit(): void {
  }

}
