import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from '../otp/otp.component';
@Component({
  selector: 'app-driver-signup',
  templateUrl: './driver-signup.component.html',
  styleUrls: ['./driver-signup.component.scss']
})
export class DriverSignupComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-login--container';

  constructor(private router : Router,private modalService:NgbModal) { }
  onSubmit(){
    const ref= this.modalService.open(OtpComponent);
  }

  ngOnInit(): void {
  }

}
