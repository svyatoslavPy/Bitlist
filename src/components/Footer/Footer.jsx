import styles from './Footer.module.scss';
import logo from '../../assets/footer-logo.svg';

import telegram from '../../assets/telegram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';

export const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Container}>
				<div className={styles.FooterWrapper}>
					<div className={styles.FooterContent}>
						<img className={styles.Logo} src={logo} alt="" />
						<div className={styles.SocialIcons}>
							<img src={telegram} alt="tg" />
							<img src={facebook} alt="facebook" />
							<img src={twitter} alt="twitter" />
						</div>
						<div className={styles.InnerButtons}>
							<button className={styles.Button}>Register</button>
							<button className={styles.ButtonPrimary}>Log in</button>
						</div>
					</div>
					<div className={styles.InnerNavigation}>
						<div className={styles.Navigation}>
							<p className={styles.NavigationItem}>Trade</p>
							<p className={styles.NavigationItem}>P2P</p>
							<p className={styles.NavigationItem}>Partners</p>
							<p className={styles.NavigationItem}>Mining</p>
							<p className={styles.NavigationItem}>Academy</p>
						</div>
						<div className={styles.Navigation}>
							<p className={styles.NavigationItem}>Privacy policy</p>
							<p className={styles.NavigationItem}>Terms of rules</p>
						</div>
					</div>
				</div>
			</div>
			<p className={styles.FooterText}>Bitlist© All Rights Reserved</p>
		</footer>
	)
}