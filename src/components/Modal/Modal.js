import axios from 'axios';
import { useState } from 'react';
import styles from './Modal.scss';

const Modal = ({ context, handleCloseButton }) => {
    const [comments, setComments] = useState(context.comments);
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newComment = {
            id: Math.floor(Math.random() * 1000),
            name: username,
            comment: commentText,
            date: Date.now(),
        };

        try {
            if (!username || !commentText) {
                new Error('Заполните все поля формы!');
            }

            await axios.post(
                `https://boiling-refuge-66454.herokuapp.com/images/${context.id}/comments`,
                newComment
            );

            setComments((prev) => [
                ...prev,
                { id: newComment.id, text: commentText, date: newComment.date },
            ]);
        } catch (error) {
            alert(error.message);
        }

        setUsername('');
        setCommentText('');
    };

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <img
                    src="/src/img/close_button.png"
                    className={styles.close}
                    width={30}
                    height={30}
                    alt="Close"
                    onClick={handleCloseButton}
                />

                <div className={styles.cardPicture}>
                    <img alt={'Картинка с api'} src={context.url} width={331} height={205} />
                </div>
                <div className={styles.comments}>
                    <ul>
                        {comments
                            ? comments.map((comment) => (
                                <li key={comment.id}>
                    <span className={styles.commentDate}>
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                                    <p className="commentText">{comment.text}</p>
                                </li>
                            ))
                            : null}
                    </ul>
                </div>
                <div className={styles.commentForm}>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Ваше имя"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <input
                            placeholder="Ваш комментарий"
                            value={commentText}
                            onChange={(event) => setCommentText(event.target.value)}
                        />
                        <input type="submit" value="Оставить комментарий" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;