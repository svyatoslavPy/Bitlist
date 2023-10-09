import styles from './InfoCompany.module.scss';

import subtractIcon from '../../assets/subtract.svg';
import mailIcon from '../../assets/mail-icon.svg';

export const Info = () => {
	return (
		<div className={styles.Info}>
			<p className={styles.Title}>
				<img src={subtractIcon} alt="icon" />
				DECENTRALIZED CRYPTO PLATFORM
			</p>
			<p className={styles.Subtitle}>
				Buy, trade and store cryptocurrencies
			</p>
			<div className={styles.Inner}>
				<div className={styles.InnerType}>
					<input placeholder='Example@gmail.com' className={styles.TypeEmail} type="text" />
					<img className={styles.IconItem} src={mailIcon} alt="mail" />
				</div>
				<button className={styles.Button}>Sign in</button>
			</div>
		</div>
	)
}