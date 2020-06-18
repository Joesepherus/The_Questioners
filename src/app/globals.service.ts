import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
	adminId = localStorage.getItem('adminId')
  constructor() {}

	setAdminId(adminId) {
		this.adminId = adminId
	}

	getAdminId() {
		return this.adminId
	}
}