interface FilterEnum {
  value: string;
  title: string;
  description?: string;
}

interface Filter {
  field: string;
  title: string;
  type: "string" | "number" | "date" | "enum" | "cpf";
  enums?: FilterEnum[];
}
