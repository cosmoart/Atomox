import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/sonner'

export default async function Layout ({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<Toaster />
		</>
	)
}