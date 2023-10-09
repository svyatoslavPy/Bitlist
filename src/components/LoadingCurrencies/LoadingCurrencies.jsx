import styles from './LoadingCurrencies.module.scss';

export const LoadingCurrencies = () => {
	return (
		<>
			<tr className={styles.Wrapper}>
				<tr>
					<span className={styles.Loader}></span>
				</tr>
			</tr>
		</>
	)
}