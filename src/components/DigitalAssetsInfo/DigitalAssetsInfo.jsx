import styles from './DigitalAssetsInfo.module.scss';
import digitalInfoPicture from '../../assets/digital-info-picture.svg';

export const DigitalAssetsInfo = () => {
	return (
		<section className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.Inner}>
					<div className={styles.Info}> 
						<p className={styles.Title}>
							Bitles is your reliable guide in the world of digital assets
						</p>
						<p className={styles.Subtitle}>
							The Bitles app is a comprehensive solution for trading digital assets. Buy and sell cryptocurrencies quickly and openly, comfortably and safely from anywhere in the world.
						</p>
					</div>
					<img className={styles.Picture} src={digitalInfoPicture} alt="digital-info" />
				</div>
			</div>
		</section>
	)
}