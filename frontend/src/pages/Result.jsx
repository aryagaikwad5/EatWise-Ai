import { useLocation } from "react-router-dom";
import Result from "../components/result/Result";

export default function ResultPage() {

    const { state } = useLocation();

    return <Result state={state} />;

}