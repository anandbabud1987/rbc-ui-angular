import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from './product';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }


  getAllProducts(){
    return this.http.get<Product[]>(this.URL + '/products');
  }
  getAllOrders() {
    return this.http.get<any>(this.URL + '/orders');
  }
  checkout(data: Item[]){
    this.http.post<String>(this.URL + '/orders',data).subscribe(data=>{
      return data;
    });
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
