import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default async function Layout ({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}