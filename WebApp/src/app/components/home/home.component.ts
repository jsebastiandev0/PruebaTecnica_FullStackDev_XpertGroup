import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1>🚀 Bienvenido a WebApp</h1>
        <p class="subtitle">Aplicación Angular que consume los servicios backend</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🔧</div>
          <h3>Service 1</h3>
          <p>Servicio backend en TypeScript con Express</p>
          <a routerLink="/service1" class="btn">Probar Service 1</a>
        </div>

        <div class="service-card">
          <div class="service-icon">⚙️</div>
          <h3>Service 2</h3>
          <p>Servicio backend en TypeScript con Express</p>
          <a routerLink="/service2" class="btn">Probar Service 2</a>
        </div>
      </div>

      <div class="info-section">
        <h2>📋 Información del Proyecto</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🏗️ Arquitectura</h4>
            <p>Microservicios con Docker Compose</p>
          </div>
          <div class="info-item">
            <h4>🔧 Backend</h4>
            <p>Node.js + TypeScript + Express</p>
          </div>
          <div class="info-item">
            <h4>🎨 Frontend</h4>
            <p>Angular 17 + TypeScript</p>
          </div>
          <div class="info-item">
            <h4>🐳 Contenedores</h4>
            <p>Docker para todos los servicios</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem 0;
    }

    .hero-section {
      text-align: center;
      margin-bottom: 3rem;
    }

    .hero-section h1 {
      font-size: 3rem;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .service-card {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .service-card h3 {
      color: #667eea;
      margin-bottom: 1rem;
    }

    .service-card p {
      color: #666;
      margin-bottom: 1.5rem;
    }

    .info-section {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .info-section h2 {
      color: #667eea;
      text-align: center;
      margin-bottom: 2rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .info-item {
      text-align: center;
      padding: 1rem;
      border-radius: 10px;
      background: #f8f9fa;
    }

    .info-item h4 {
      color: #667eea;
      margin-bottom: 0.5rem;
    }

    .info-item p {
      color: #666;
      margin: 0;
    }

    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {} 