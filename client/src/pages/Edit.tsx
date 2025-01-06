import { useParams } from "react-router";

export default function Edit() {
    let params = useParams();
    let quizId: string = params.quizId ?? "defaultId";

    return (
        <div>
            this is the edit quiz page that has questions
            <div>quiz id is: {quizId}</div>
        </div>
    );
}
