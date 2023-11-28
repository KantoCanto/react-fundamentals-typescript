import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptPT from "date-fns/locale/pt";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  //date formating and handling
  const publishedDateFormated = format(publishedAt, "yyyy-MM-dd HH:mm", {
    locale: ptPT,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptPT,
    addSuffix: true,
  });

  //comment handling
  const [comments, setComments] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your Feedback:</strong>
        <textarea
          required
          name="comment"
          value={newCommentText}
          placeholder="Comment..."
          onChange={handleNewCommentChange}
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
