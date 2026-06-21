type fuelTypes =
    | "Petrol"
    | "Diesel"
    | "Electric"
    | "Gpl"
    | "Methane"
    | "Hybrid"

export type Vehicle = {
    id: number,
    title: string,
    category: string,
    price: number,
    brand: string,
    releaseYear: number,
    owners: number,
    km: number,
    fuelType: fuelTypes,
    engineSize: number
}
