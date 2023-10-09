import styles from './AboutCompany.module.scss';
import { Info } from '../InfoCompany/InfoCompany';
import diagrams from '../../assets/diagrams.svg';
import bgChart from '../../assets/bg-chart.svg';
import bgChart2 from '../../assets/bgChart2.svg';

export const AboutCompany = () => {
	return (
		<section className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.Inner}>
					<Info />
					<img className={styles.Diagrams} src={diagrams} alt="diagrams" />
					<img className={styles.Bg} src={bgChart} alt="image" /> 
					<img className={styles.Bg2} src={bgChart2} alt="image" />
				</div>
			</div>
		</section>
	)
}