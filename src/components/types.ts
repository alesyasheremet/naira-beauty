export type Treatment = {
  category: string,
  subcategory: string,
  title: string,
  duration: string,
  price: number,
  treatments: SubTreatment[],
};

export type SubTreatment = {
    title: string,
  duration: string,
  price: number,
}