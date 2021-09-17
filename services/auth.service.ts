import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ 
    providedIn: 'root' })

export class AuthService {
    constructor(
        private ngZone:NgZone,
        private router:Router)
        {
            
        }
    

}

  
   

  
  

  
