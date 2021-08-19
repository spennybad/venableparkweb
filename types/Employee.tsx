export interface Employee {
  employee: {
      employee_desc: string;
      employee_position: string;
      name: string;
      principle: boolean;
      qualifications: Array<string>;
      employee_photo?: string;
      _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}