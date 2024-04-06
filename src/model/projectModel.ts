export interface Shop {
    id: number,
    name: string,
    description: string,
    address: string,
    phone_number: string,
    business_hours: string,
    create_name: string,
}

export interface Category {
    id: number,
    name: string,
    description: string,
    shop_name: string,
    created_at: string,
}