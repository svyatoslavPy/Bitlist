import styles from './TableCurrency.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { CryptoСurrencies } from '../CryptoСurrencies/CryptoСurrencies';
import { LoadingCurrencies } from '../LoadingCurrencies/LoadingCurrencies';

export const TableCurrency = () => {
	const API = "https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD";
	const [crypto, setCrypto] = useState([]);
	const assets = ["Bitcoin", "Ethereum", "BNB", "BUSD", "Polygon"];
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		setLoading(true);

		const getCurrency = () => {
			axios.get(
				API
			).then((res) => {
				setCrypto(res.data.coins);
				setLoading(false);
			});
		};

		getCurrency();

		const p = setInterval(getCurrency, 5000);
		return () => clearInterval(p);

	}, []);
	

	const currency = crypto.filter((item => {
		return assets.includes(item.name);
	}))


	return (
		<section className={styles.TableWrapper}>
			<div className={styles.Container}>
				<table className={styles.Table}>
					<tr className={styles.InnerTable}>
						<tr>
							<th>
								Asset
							</th>
						</tr>
						<tr className={styles.InnerSubtitle}>
							<th>Price</th>
							<th>Change</th>
							<th>Volume</th>
						</tr>
					</tr>
					{currency.length > 0 && !loading ?
						currency.map((item) => {
							return (
								<>
									<CryptoСurrencies 
										key={item.id}
										symbol={item.symbol}
										icon={item.icon}
										price={item.price}
										priceChange1h={item.priceChange1h}
										volume={item.volume}
										name={item.name}
									/>
								</>
							);
						}) : <LoadingCurrencies/>}
				</table>
				<button className={styles.Button}>All assets</button>
			</div>
		</section>
	)
}
