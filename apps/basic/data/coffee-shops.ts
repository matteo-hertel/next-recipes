export type CoffeeShop = {
    id: number;
    name: string;
    image: string;
    address: Address;
};

export type Address = {
    street: string;
    streetName: string;
    buildingNumber: string;
    city: string;
    zipcode: string;
    country: string;
    county_code: string;
    latitude: number;
    longitude: number;
    id?: number;
};

const data = [
    {
        id: 1,
        name: "Doctor Bean",
        image: "https://placeimg.com/640/480/arch",
        address: {
            street: "614 Easter Land",
            streetName: "Treutel Prairie",
            buildingNumber: "34509",
            city: "Lake Hardyfurt",
            zipcode: "24030-6385",
            country: "Western Sahara",
            county_code: "NC",
            latitude: 72.86095,
            longitude: -137.096463,
        },
    },

    {
        id: 2,
        name: " Wicked Java",
        image: "https://placeimg.com/640/480/arch",
        address: {
            street: "8316 Rocio Crossing Apt. 721",
            streetName: "Schamberger Cliffs",
            buildingNumber: "576",
            city: "Sauertown",
            zipcode: "76373-8712",
            country: "Germany",
            county_code: "CL",
            latitude: 37.16631,
            longitude: 152.396919,
        },
    },

    {
        id: 3,
        name: "",
        image: "https://placeimg.com/640/480/arch",
        address: {
            street: "53311 Upton Squares",
            streetName: "Patience Streets",
            buildingNumber: "3855",
            city: "North Samara",
            zipcode: "87161-3083",
            country: "Switzerland",
            county_code: "AU",
            latitude: -86.070607,
            longitude: 9.29648,
        },
    },
    {
        id: 4,
        name: " Brew Planet",
        image: "https://placeimg.com/640/480/arch",
        address: {
            id: 0,
            street: "2231 Jace Fields",
            streetName: "Adrianna Courts",
            buildingNumber: "80952",
            city: "North Raoulburgh",
            zipcode: "82110-8821",
            country: "Slovakia (Slovak Republic)",
            county_code: "MP",
            latitude: -47.236628,
            longitude: 144.406981,
        },
    },
    {
        id: 5,
        name: "Posh Bean",
        image: "https://placeimg.com/640/480/arch",
        address: {
            street: "495 Boris Locks Apt. 203",
            streetName: "Brendan Pike",
            buildingNumber: "886",
            city: "New Brennon",
            zipcode: "19431",
            country: "Malta",
            county_code: "KP",
            latitude: 27.082771,
            longitude: -104.070119,
        },
    },
] as const;

export default data;
