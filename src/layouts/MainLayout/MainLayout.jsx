
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';

export const MainLayout = ({
	children
}) => {
	return (
		<main className={styles.Main}>
			{children}
		</main>
	)
}


MainLayout.propTypes = {
	children: PropTypes.node
}