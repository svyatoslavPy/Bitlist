import styles from './RegisterForm.module.scss';
import mailIcon from '../../assets/mail-icon.svg';

export const RegisterForm = () => {
	return (
		<section className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.Inner}>
					<p className={styles.Title}>Register your account now and start to trade</p>
					<div className={styles.WrapperType}>
						<div className={styles.InnerType}>
							<input placeholder='Example@gmail.com' className={styles.TypeEmail} type="text" />
							<img className={styles.IconItem} src={mailIcon} alt="mail" />
						</div>
						<button className={styles.Button}>Sign in</button>
					</div>
				</div>
			</div>
		</section>
	)
}	