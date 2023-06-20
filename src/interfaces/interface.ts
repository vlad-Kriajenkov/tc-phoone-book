export interface IAddContact {
  name: string;
  phone: string;
}
export interface IContact {
  createdAt?: string;
  id: string;
  name: string;
  phone: string;
}

export interface IDataPromis {
  createdAt: string;
  id: string;
  name: string;
  phone: string;
}

export interface IPatchContact {
  createdAt?: string ;
  id: string | undefined;
  name: string;
  phone: string;
} 

export interface IContactStateProps {
  contacts: IContact[];
  filter?: string;
  contactPatch?: IDataPromis
}



 