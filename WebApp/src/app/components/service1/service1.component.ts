import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ServiceResponse } from '../../services/api.service';

@Component({
  selector: 'app-service1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service-container">
      <div class="service-header">
        <h1>🔧 Service 1</h1>
        <p>Consumiendo el primer servicio backend</p>
      </div>

      <div class="endpoints-grid">
        <div class="endpoint-card">
          <h3>🏠 Endpoint Home</h3>
          <div class="endpoint-content">
            <p><strong>URL:</strong> GET /</p>
            <button 
              class="btn" 
              (click)="callHome()" 
              [disabled]="loadingHome">
              {{ loadingHome ? 'Cargando...' : 'Probar Endpoint' }}
            </button>
            
            <div *ngIf="homeResponse" class="response-section">
              <h4>Respuesta:</h4>
              <pre class="response-json">{{ homeResponse | json }}</pre>
            </div>
            
            <div *ngIf="homeError" class="error-section">
              <h4>Error:</h4>
              <p class="error-message">{{ homeError }}</p>
            </div>
          </div>
        </div>

        <div class="endpoint-card">
          <h3>💚 Endpoint Health</h3>
          <div class="endpoint-content">
            <p><strong>URL:</strong> GET /health</p>
            <button 
              class="btn" 
              (click)="callHealth()" 
              [disabled]="loadingHealth">
              {{ loadingHealth ? 'Cargando...' : 'Probar Endpoint' }}
            </button>
            
            <div *ngIf="healthResponse" class="response-section">
              <h4>Respuesta:</h4>
              <pre class="response-json">{{ healthResponse | json }}</pre>
            </div>
            
            <div *ngIf="healthError" class="error-section">
              <h4>Error:</h4>
              <p class="error-message">{{ healthError }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="service-info">
        <h3>📋 Información del Servicio</h3>
        <ul>
          <li><strong>Puerto:</strong> 3000</li>
          <li><strong>Tecnología:</strong> Node.js + TypeScript + Express</li>
          <li><strong>Estado:</strong> <span class="status-success">Activo</span></li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .service-container {
      padding: 2rem 0;
    }

    .service-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .service-header h1 {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .service-header p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
    }

    .endpoints-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .endpoint-card {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .endpoint-card h3 {
      color: #667eea;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .endpoint-content p {
      color: #666;
      margin-bottom: 1rem;
    }

    .response-section {
      margin-top: 1.5rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #28a745;
    }

    .response-json {
      background: #2d3748;
      color: #e2e8f0;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
      font-size: 0.9rem;
      margin: 0;
    }

    .error-section {
      margin-top: 1.5rem;
      padding: 1rem;
      background: #f8d7da;
      border-radius: 8px;
      border-left: 4px solid #dc3545;
    }

    .error-message {
      color: #721c24;
      margin: 0;
    }

    .service-info {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .service-info h3 {
      color: #667eea;
      margin-bottom: 1rem;
    }

    .service-info ul {
      list-style: none;
      padding: 0;
    }

    .service-info li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }

    .service-info li:last-child {
      border-bottom: none;
    }

    @media (max-width: 768px) {
      .endpoints-grid {
        grid-template-columns: 1fr;
      }
      
      .service-header h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class Service1Component implements OnInit {
  homeResponse: ServiceResponse | null = null;
  healthResponse: ServiceResponse | null = null;
  homeError: string | null = null;
  healthError: string | null = null;
  loadingHome = false;
  loadingHealth = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  callHome(): void {
    this.loadingHome = true;
    this.homeResponse = null;
    this.homeError = null;

    this.apiService.getService1Home().subscribe({
      next: (response) => {
        this.homeResponse = response;
        this.loadingHome = false;
      },
      error: (error) => {
        this.homeError = `Error: ${error.message || 'No se pudo conectar al servicio'}`;
        this.loadingHome = false;
      }
    });
  }

  callHealth(): void {
    this.loadingHealth = true;
    this.healthResponse = null;
    this.healthError = null;

    this.apiService.getService1Health().subscribe({
      next: (response) => {
        this.healthResponse = response;
        this.loadingHealth = false;
      },
      error: (error) => {
        this.healthError = `Error: ${error.message || 'No se pudo conectar al servicio'}`;
        this.loadingHealth = false;
      }
    });
  }
} 