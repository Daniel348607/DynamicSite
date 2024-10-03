import { Component, OnInit } from '@angular/core';

interface Articulo {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
  precio: number;
}

@Component({
  selector: 'app-prodmain',
  templateUrl: './prodmain.component.html',
  styleUrls: ['./prodmain.component.css']
})

export class ProdmainComponent implements OnInit {

  articulos: Articulo[] = [];
  articulosFiltrados: Articulo[] = [];
  paginaActual = 1;
  articulosPorPagina = 12;
  filtros = {
    categoria: '',
    precioMaximo: null
  };

  categorias = ['Electrónica', 'Ropa', 'Hogar', 'Deportes'];

  ngOnInit() {
    this.cargarArticulos();
    this.aplicarFiltros();
  }

  cargarArticulos() {
    for (let i = 1; i <= 50; i++) {
      this.articulos.push({
        id: i,
        nombre: `Artículo ${i}`,
        imagen: `https://picsum.photos/200/200?random=${i}`,
        categoria: this.categorias[Math.floor(Math.random() * this.categorias.length)],
        precio: Math.floor(Math.random() * 1000) + 1
      });
    }
  }

  aplicarFiltros() {
    this.articulosFiltrados = this.articulos.filter(articulo => {
      const cumpleCategoría = !this.filtros.categoria || articulo.categoria === this.filtros.categoria;
      const cumplePrecio = !this.filtros.precioMaximo || articulo.precio <= this.filtros.precioMaximo;
      return cumpleCategoría && cumplePrecio;
    });
    this.paginaActual = 1;
  }

  get articulosPaginados() {
    const indiceInicio = (this.paginaActual - 1) * this.articulosPorPagina;
    return this.articulosFiltrados.slice(indiceInicio, indiceInicio + this.articulosPorPagina);
  }

  get totalPaginas() {
    return Math.ceil(this.articulosFiltrados.length / this.articulosPorPagina);
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

}
