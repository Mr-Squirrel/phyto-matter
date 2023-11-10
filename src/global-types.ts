export type MaterialFilters = {
  name: string;
  category: string;
  plant_genus: string;
  material_function: string;
  processing: string;
};

export type PlantFilters = {
  latin_name: string;
  contaminant: string;
  vegetation_type: string;
  hardiness_zone: string;
  soil: string;
  shade: string;
};

export type ContaminantFilters = {
  name: string;
  category: string;
};
