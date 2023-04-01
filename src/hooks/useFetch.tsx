import { useEffect, useState } from "react";

export default async function useFetch<T>(url: string) {
    const fetchedData = await fetch(url);
    const parsedData = await fetchedData.json();
    return parsedData as T;
}