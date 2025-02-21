import styled from "styled-components";

const AllFactsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightgreen;
`;

const SingleFactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 40%;
    padding: 2%;
    margin: 1%;
    background-color: green;
    border: 3px darkgreen solid;
    text-align: center;
    font-size: 1.2rem;
`;

interface CatFact {
    fact: string;
    length: number;
}

export default function DataDisplay(props: { data: CatFact[] }) {
    return (
        <AllFactsDiv>
            {
                props.data.map((factObj, index) =>
                    <SingleFactDiv key={index}>
                        <p>{factObj.fact}</p>
                        <small>Length: {factObj.length} characters</small>
                    </SingleFactDiv>
                )
            }
        </AllFactsDiv>
    );
}
