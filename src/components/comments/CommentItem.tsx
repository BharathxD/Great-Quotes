import classes from "./CommentItem.module.css";

interface ICommentProps {
  text: string;
}

const CommentItem: React.FC<ICommentProps> = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
