export interface Address {
  locality: string;
  address_line_1: string;
  country: string;
  postal_code: string;
  premises: string;
}

export interface Links {
  self: string;
}

export interface Matches {
  snippet: string[];
  title: number[];
}

export interface Company {
  address: Address;
  date_of_creation: string;
  address_snippet: string;
  company_status: string;
  company_number: string;
  kind: string;
  company_type: string;
  title: string;
  description_identifier: string[];
  links: Links;
  matches: Matches;
  description: string;
  snippet: string;
}
