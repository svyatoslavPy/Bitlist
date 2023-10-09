/* eslint-disable react/prop-types */
import styles from './CryptoСurrencies.module.scss';

export const CryptoСurrencies = ({
	symbol,
	price,
	icon,
	volume,
	priceChange1h,
	name
}) => {
	return (
		<tr className={styles.Wrapper}>
			<tr className={styles.InnerTablePrimary}>
				<tr>
					<td>
						<img className={styles.Icon} src={icon} alt="1inch" />
					</td>
				</tr>
				<tr className={styles.Texts}>
					<td className={styles.Text}>{name}</td>
					<td className={styles.TextPrimary}>{symbol}</td>
				</tr>
			</tr>
			<tr className={styles.Items}>
				<td>$ {price.toFixed(2)}</td>
				<td className={priceChange1h < 0 ? styles.Negative : styles.Positive}>{priceChange1h} %</td>
				<td>{volume}</td>
				<button>Trade</button>
			</tr>
		</tr>
	)
}