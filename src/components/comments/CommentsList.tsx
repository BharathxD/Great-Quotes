import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

type CommentType = {
  id: string;
  text: string;
};

interface ICommentListProps {
  comments: CommentType[];
}

const CommentsList: React.FC<ICommentListProps> = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment: CommentType) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
