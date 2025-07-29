import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <h2>🚀 WebApp</h2>
        </div>
        <ul class="nav-menu">
          <li class="nav-item">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/service1" routerLinkActive="active" class="nav-link">
              Service 1
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/service2" routerLinkActive="active" class="nav-link">
              Service 2
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand h2 {
      color: #667eea;
      margin: 0;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-link {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .nav-link:hover,
    .nav-link.active {
      background: #667eea;
      color: white;
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-menu {
        gap: 1rem;
      }
    }
  `]
})
export class NavbarComponent {} 