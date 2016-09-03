import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {Http, Headers} from '@angular/http';

@Injectable()
export  class AddPhotoService{

    constructor(private http:Http){}

    sendPhoto(photo:Photo){
        let url = "http://localhost:8080/rest/photo/add";
        let header = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});

       return this.http.post(url,JSON.stringify(photo),{headers:header});


    }


}