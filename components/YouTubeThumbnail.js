import styles from './YouTubeThumbnail.module.css';

function getVideoId(embedUrl) {
  try {
    const url = new URL(embedUrl);
    const parts = url.pathname.split('/');
    return parts[parts.length - 1];
  } catch {
    return null;
  }
}

const YouTubeThumbnail = ({ src, title, className }) => {
  const videoId = getVideoId(src);
  if (!videoId) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.wrapper} ${className || ''}`}
      title={title ? `Watch: ${title}` : 'Watch on YouTube'}
    >
      <img
        src={thumbnailUrl}
        alt={title || 'YouTube video thumbnail'}
        className={styles.thumbnail}
        loading="lazy"
      />
      <span className={styles.playButton} aria-hidden="true"></span>
    </a>
  );
};

export default YouTubeThumbnail;
