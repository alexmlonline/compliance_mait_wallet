import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'certificates',
    loadComponent: () => import('./pages/certificates/certificates.component').then(m => m.CertificatesComponent)
  },
  {
    path: 'certificates/add',
    loadComponent: () => import('./pages/certificates/add-certificate/add-certificate.component').then(m => m.AddCertificateComponent)
  },
  {
    path: 'certificates/:id',
    loadComponent: () => import('./pages/certificates/view-certificate/view-certificate.component').then(m => m.ViewCertificateComponent)
  },
  {
    path: 'connections',
    loadComponent: () => import('./pages/connections/connections.component').then(m => m.ConnectionsComponent)
  },
  {
    path: 'connections/:id',
    loadComponent: () => import('./pages/connections/view-connection/view-connection.component').then(m => m.ViewConnectionComponent)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./pages/notifications/notifications.component').then(m => m.NotificationsComponent)
  },
  {
    path: 'notifications/:id',
    loadComponent: () => import('./pages/notifications/view-notification/view-notification.component').then(m => m.ViewNotificationComponent)
  },
  {
    path: 'photo',
    loadComponent: () => import('./pages/photo/photo.component').then(m => m.PhotoComponent)
  },
  {
    path: '',
    redirectTo: 'notifications',
    pathMatch: 'full'
  }
];
