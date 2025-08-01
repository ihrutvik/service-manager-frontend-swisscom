export interface Owner {
  id: string;
  name: string;
  accountNumber: string;
  level: number;
}

export interface Resource {
  id: string;
  owners: Owner[];
}

export interface ServiceEntity {
  id: string;
  resources: Resource[];
}

export interface ApiResponse {
  status: string;
  message: string;
  data: ServiceEntity;
}
