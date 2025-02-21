import { useEffect, useState } from "react";
import DataDisplay from "./components/DataDisplay";
import styled from "styled-components";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

interface CatFact {
    fact: string;
    length: number;
}

export default function App() {
    const [data, setData] = useState<CatFact[]>([]);

    useEffect(() => {
        async function fetchData() {
            const facts: CatFact[] = [];

          
            for (let i = 0; i < 5; i++) {
                const response = await fetch("https://catfact.ninja/fact");
                const fact: CatFact = await response.json();
                facts.push(fact);
            }

            setData(facts);
        }

        fetchData()
            .then(() => console.log("Cat facts fetched successfully"))
            .catch((e) => console.error("Error fetching cat facts:", e));
    }, []);

    return (
        <ParentDiv>
            <DataDisplay data={data} />
        </ParentDiv>
    );
}
