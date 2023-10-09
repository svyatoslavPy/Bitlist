import styles from './Header.module.scss';
import Logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search-lg.svg';

export const Header = () => {
	return (
		<header className={styles.Header}>
			<div className={styles.Container}>
				<nav className={styles.Navigation}>
					<div className={styles.Logo}>
						<img src={Logo} alt="logo" />
						<span className={styles.Line}></span>
						<div className={styles.InnerType}>
							<input placeholder='Search' className={styles.TypeSearch} type="text" />
							<img className={styles.SearchItem} src={searchIcon} alt="searchIcon" />
						</div>
					</div>
					<div className={styles.Links}>
						<p className={styles.Link}>Trade</p>
						<p className={styles.Link}>P2P</p>
						<p className={styles.Link}>Partners</p>
						<p className={styles.Link}>Mining</p>
						<p className={styles.Link}>Academy</p>
						<span className={styles.Line}></span>
					</div>
					<div className={styles.AuthButtons}>
						<button className={styles.Button}>Register</button>
						<button className={styles.ButtonPrimary}>Log in</button>
					</div>
				</nav>
			</div>
		</header>
	)
}