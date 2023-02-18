import classes from "./QuoteDetail.module.css";
import { useParams, Route, Routes } from "react-router-dom";
import Comments from "../../components/comments/Comments";

const QuoteDetail: React.FC = () => {
  const params = useParams();
  return (
    <main>
      <h1>Quote Detail Page Example</h1>
      <p>{params.id}</p>
      <Routes>
        <Route path={`/quotes/:id/comments`} element={<Comments />} />
      </Routes>
    </main>
  );
};

export default QuoteDetail;
