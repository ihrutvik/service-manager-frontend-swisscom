import { Component, OnInit } from '@angular/core';
import { ServiceEntity } from '../../models/service.model';
import { ServiceApiService } from '../../services/service-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ServiceApiService],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  service: ServiceEntity = { id: '', resources: [] };
  serviceIdToFetch: string = '';
  editMode = false;

  constructor(private apiService: ServiceApiService) {}

  ngOnInit(): void {}

  showAlert(message: string, success = true) {
    alert(success ? `${message}` : `${message}`);
  }

  fetchService() {
    this.apiService.getServiceById(this.serviceIdToFetch).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.service = res.data;
          this.showAlert(res.message);
        } else {
          this.showAlert(res.message, false);
        }
      },
      error: (err) => {
        this.showAlert('Service not found while fetching', false);
      }
    });
  }

  createService() {
    this.apiService.createService(this.service).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.service = res.data;
          this.showAlert(res.message);
        } else {
          this.showAlert(res.message, false);
        }
      },
      error: (err) => {
        this.showAlert('Failed to create service', false);
      }
    });
  }

  updateService() {
    this.apiService.updateService(this.service.id, this.service).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.service = res.data;
          this.showAlert(res.message);
        } else {
          this.showAlert(res.message, false);
        }
      },
      error: () => {
        this.showAlert('Failed to update service', false);
      }
    });
  }

  deleteService() {
    this.apiService.deleteService(this.service.id).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.service = { id: '', resources: [] };
          this.showAlert(res.message);
        } else {
          this.showAlert(res.message, false);
        }
      },
      error: () => {
        this.showAlert('Failed to delete service', false);
      }
    });
  }

  addResource() {
    this.service.resources.push({ id: '', owners: [] });
  }

  addOwner(resourceIndex: number) {
    this.service.resources[resourceIndex].owners.push({
      id: '',
      name: '',
      accountNumber: '',
      level: 0
    });
  }

  removeOwner(resourceIndex: number, ownerIndex: number) {
    this.service.resources[resourceIndex].owners.splice(ownerIndex, 1);
  }

  removeResource(index: number) {
    this.service.resources.splice(index, 1);
  }
}
