import { Header } from "../../components/Header/Header"
import { AboutCompany } from "../../components/AboutCompany/AboutCompany"
import { MainLayout } from "../../layouts/MainLayout/MainLayout"
import { TableCurrency } from "../../components/TableCurrency/TableCurrency"
import { DigitalAssetsInfo } from "../../components/DigitalAssetsInfo/DigitalAssetsInfo"
import { AssetFundInfo } from "../../components/AssetFundInfo/AssetFundInfo"
import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { Footer } from "../../components/Footer/Footer"

export const MainPage = () => {
	return (
		<>
			<Header/>
			<MainLayout>
				<AboutCompany/>
				<TableCurrency/>
				<DigitalAssetsInfo/>
				<AssetFundInfo/>
				<RegisterForm/>
			</MainLayout>
			<Footer/>
		</>
	)
}