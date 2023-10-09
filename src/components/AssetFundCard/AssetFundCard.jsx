import styles from './AssetFundCard.module.scss';
import PropTypes from 'prop-types';

export const AssetFundCard = ({image, title, subtitle}) => {
	return (
		<div className={styles.Card}>
			<img className={styles.Picture} src={image} alt="icon" />
			<p className={styles.Title}>{title}</p>
			<p className={styles.Subtitle}>{subtitle}</p>
		</div>
	)
}

AssetFundCard.propTypes = {
	image: PropTypes.any,
	title: PropTypes.string,
	subtitle: PropTypes.string
}