import styles from './AssetFundInfo.module.scss';
import { data } from './data';

import { AssetFundCard } from '../AssetFundCard/AssetFundCard';

export const AssetFundInfo = () => {
	return (
		<section className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.Inner}>
					{data.map((item) => {
						return (
							<>
								<AssetFundCard
									image={item.images}
									title={item.title}
									subtitle={item.subtitle} />
							</>
						)
					})}
				</div>
			</div>
		</section>
	)
}