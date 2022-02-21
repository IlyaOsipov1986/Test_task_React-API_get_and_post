import ContentLoader from 'react-content-loader';

import styles from './Card.scss';

const Card = ({ id, url: imageUrl, loading, handleClick }) => {
    return (
        <div className={styles.card} onClick={() => handleClick(id)}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={229}
                    height={142}
                    viewBox="0 0 229 142"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="0" rx="10" ry="10" width="229" height="142" />
                </ContentLoader>
            ) : (
                <>
                    <img src={imageUrl} alt="Card" />
                </>
            )}
        </div>
    );
};

export default Card;