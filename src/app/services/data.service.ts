import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


const URLCONDITIONS = 'http://api.wunderground.com/api/91b810f8a2989c7d/conditions/q/Mexico/Mexico.json';
const URLFORECAST = 'http://api.wunderground.com/api/91b810f8a2989c7d/forecast/q/Mexico/Mexico.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  clientes = [
    {
      '_id': '5c06df97286ed0ff549308b9',
      'age': 39,
      'name': 'Robles Hester',
      'gender': 'male',
      'email': 'robleshester@inear.com'
    },
    {
      '_id': '5c06df97e69d2bb82acfde90',
      'age': 40,
      'name': 'Jimmie Blake',
      'gender': 'female',
      'email': 'jimmieblake@inear.com'
    },
    {
      '_id': '5c06df975700a77c2d768b97',
      'age': 30,
      'name': 'William Slater',
      'gender': 'male',
      'email': 'williamslater@inear.com'
    },
    {
      '_id': '5c06df970e7b8dccc64071c5',
      'age': 27,
      'name': 'Noble Dawson',
      'gender': 'male',
      'email': 'nobledawson@inear.com'
    },
    {
      '_id': '5c06df97aff2f41fe288601f',
      'age': 20,
      'name': 'Roberts Downs',
      'gender': 'male',
      'email': 'robertsdowns@inear.com'
    },
    {
      '_id': '5c06df97ad2c957f1194bd9c',
      'age': 30,
      'name': 'Vonda Kemp',
      'gender': 'female',
      'email': 'vondakemp@inear.com'
    },
    {
      '_id': '5c06df971ab57461b755307f',
      'age': 40,
      'name': 'Evangelina Hendrix',
      'gender': 'female',
      'email': 'evangelinahendrix@inear.com'
    },
    {
      '_id': '5c06df972e17dba6cc7f3a78',
      'age': 34,
      'name': 'Vanessa House',
      'gender': 'female',
      'email': 'vanessahouse@inear.com'
    },
    {
      '_id': '5c06df979cf8953bfd939425',
      'age': 26,
      'name': 'Welch Griffith',
      'gender': 'male',
      'email': 'welchgriffith@inear.com'
    },
    {
      '_id': '5c06df9740358caf904279b7',
      'age': 26,
      'name': 'Moore Barnes',
      'gender': 'male',
      'email': 'moorebarnes@inear.com'
    }
  ];

  constructor(private http: Http) { }

  getClima() {
    return this.http.get(URLCONDITIONS).pipe(map(res => res.json()));
  }

  getClientes = () => {
    return  this.clientes.map((lst: any) => {
      return {'valor': lst['_id'], 'descripcion': lst['name'] } ;
    });
  }
}
