import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableFilteringService {
  constructor() {}

  private formatDate(obj: object, keys: string[]): object {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    keys.forEach((key) => {
      let date = new Date(obj[key]);
      obj[key] = date.toLocaleDateString('en-CA', options);
    });
    return obj;
  }
  private dateFilter(data: any[], criteria: any): any {
    if (criteria['startDate'] || criteria['endDate']) {
      data = data.filter((item) => {
        const createdOn = item['createdOn'];

        if (criteria['startDate'] && criteria['endDate']) {
          criteria = this.formatDate(criteria, ['startDate', 'endDate']);
          return (
            createdOn >= criteria['startDate'] &&
            createdOn <= criteria['endDate']
          );
        } else if (criteria['startDate']) {
          criteria = this.formatDate(criteria, ['startDate']);
          return createdOn >= criteria['startDate'];
        } else if (criteria['endDate']) {
          criteria = this.formatDate(criteria, ['endDate']);
          return createdOn <= criteria['endDate'];
        }
        return true;
      });
    }
    // delete criteria['startDate'];
    // delete criteria['endDate'];
    return data;
  }

  // searching function
  searchInAllFields(data: any[], searchTerm: string): any[] {
    searchTerm = searchTerm.toLowerCase();
    return data.filter((item) => {
      return Object.values(item).some((value: string) =>
        value?.toString().toLowerCase().includes(searchTerm)
      );
    });
  }

  // filtering function
  filterByCriteria(data: any[], criteria: any): any[] {
    data = this.dateFilter(data, criteria);
    return data.filter((item) => {
      return Object.keys(criteria).every((key) => {
        if (
          criteria[key] === '' ||
          criteria['startDate'] ||
          criteria['endDate']
        ) {
          return true;
        }
        if (typeof item[key] === 'string') {
          return item[key].toLowerCase().includes(criteria[key].toLowerCase());
        } else {
          return item[key] == criteria[key];
        }
      });
    });
  }

  // Update the array of data
  updateTableData(allData: any[], newData: any, idToRemove?: number): any[] {
    // إذا تم تمرير id للحذف، قم بإزالة العنصر من المصفوفة
    if (idToRemove) {
      return allData.filter((item) => item.id !== idToRemove);
    }
    // تحديث العنصر إذا كان موجودًا في المصفوفة
    const updatedData = allData.map((item) =>
      item.id === newData.id ? newData : item
    );
    // تحقق مما إذا كان العنصر موجودًا في المصفوفة أم لا
    const isItemExist = allData.some((item) => item.id === newData.id);
    // إذا كان العنصر غير موجود، أضفه إلى المصفوفة
    return isItemExist ? updatedData : [...updatedData, newData];
  }

  // Remove the array of data
  toggleExp(exp: boolean): any {
    return !exp;
  }
}
