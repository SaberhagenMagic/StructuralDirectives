export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: Catalogo[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
}

export interface Catalogo {
  descripcion: string;
  valor: string;
}
