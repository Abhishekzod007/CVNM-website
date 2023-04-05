export interface Project {
    id: number;
    name: string;
    link?: string;
}

export interface Person {
    id: number;
    name: string;
    title: string;
    imageUrl: string;
    email: string;
    researchArea: string[];
    projects: number[];
    contact: string;
}

export interface News {
    id: number;
    date: string;
    content: string;
    link?: string
}

export interface Department {
    id: number,
    title: string,
    members: number[]
}