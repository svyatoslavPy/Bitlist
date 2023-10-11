import styles from './AboutCompany.module.scss';
import { Info } from '../InfoCompany/InfoCompany';
import diagrams from '../../assets/diagrams.svg';
import companyBg from '../../assets/bg-chart.svg';
import companyBg2 from '../../assets/bgChart2.svg';

export const AboutCompany = () => {
	return (
		<section className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.companyInfoInner}>
					<Info />
					<img className={styles.companyDiagrams} src={diagrams} alt="Company Diagrams" />
				</div>
			</div>
			<img className={styles.companyBackground} src={companyBg} alt="Company Background Image" />
			<img className={styles.companyBackground2} src={companyBg2} alt="Company Background Image 2" />
		</section>
	)
}
