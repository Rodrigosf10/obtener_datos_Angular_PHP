import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { articulo } from './interfaces/articulos.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'obtenerDatos';
	public articulos : articulo[] = [];
	constructor(private http: HttpClient){}
	ngOnInit(){
		let url = "http://localhost/productos/";
		this.http.get<articulo[]>(url)
		.subscribe( resultado => {
			this.articulos = resultado;
			console.log(this.articulos);
		});
	}
}