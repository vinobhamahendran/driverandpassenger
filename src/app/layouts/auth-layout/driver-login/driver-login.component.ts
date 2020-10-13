import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.scss']
})
export class DriverLoginComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-login--container';
  constructor(private router : Router,private activatedRoute:ActivatedRoute,private modalService:NgbModal) { }

  onSubmit(){
    const ref= this.modalService.open(OtpComponent);
  }
  ngOnInit(): void {
  }

}
