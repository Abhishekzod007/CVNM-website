import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Department, News, Person, Project } from "../interfaces/Data";

interface apiType {
    getNews: () => News[];
    getMembers: () => Department[];
    getPerson: (id: number) => Person;
    getProject: (id: number) => Project;
    getPersonProjectNames: (id: number) => string[];
    loading: boolean;
}

const ApiContext = createContext<apiType>({} as apiType);

export function ApiProvider({ children }: { children: ReactNode }) {
    const [news, setNews] = useState<News[]>([]);
    const [people, setPeople] = useState<Person[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [members, setMembers] = useState<Department[]>([]);

    const [loading, setLoading] = useState(true)

    function getNews() {
        return news
    }

    function getMembers() {
        return members;
    }

    function getPerson(id: number) {
        try {
            return people.filter(person => person.id == id)[0]
        } catch (err) {
            console.log(err)
        }
        return people[0]
    }

    function getProject(id: number) {
        try {
            return projects.filter(project => project.id == id)[0]
        } catch (err) {
            console.log(err)
        }
        return projects[0]
    }

    function getPersonProjectNames(id: number) {
        const person = getPerson(id)
        return person.projects.map(projectId => getProject(projectId).name)
    }

    async function loadData() {
        const newsData = await useFetch<News[]>('/news.json')
        setNews(newsData)
        const peopleData = await useFetch<Person[]>('/people.json')
        setPeople(peopleData)
        const projectsData = await useFetch<Project[]>('/projects.json')
        setProjects(projectsData)
        const membersData = await useFetch<Department[]>('/members.json')
        setMembers(membersData)
        setLoading(false)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <ApiContext.Provider value={{ getNews, getMembers, getPerson, getProject, getPersonProjectNames, loading }}>{children}</ApiContext.Provider>
    );
}

export default function useApi() {
    return useContext(ApiContext);
}