import { ArrowRight, Code, Github, Heart, Plus, Sparkles, Upload, Users } from 'lucide-react';

export default function CTA () {
	return (
		<footer className="relative bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 overflow-hidden rounded-3xl">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400 rounded-full blur-2xl"></div>
			</div>

			{/* Animated floating elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 animate-pulse">
					<Code className="w-6 h-6 text-pink-300 opacity-30" />
				</div>
				<div className="absolute top-3/4 right-1/3 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
					<Sparkles className="w-5 h-5 text-blue-300 opacity-40" />
				</div>
				<div className="absolute top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
					<Upload className="w-4 h-4 text-indigo-300 opacity-35" />
				</div>
			</div>

			<div className="relative max-w-7xl mx-auto px-6 py-16 2xl:py-20">
				<div className="text-center space-y-8">
					{/* Header */}
					<div className="space-y-4">
						<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white/20 to-purple-500/20 rounded-full border border-white/30 backdrop-blur-sm">
							<Users className="w-4 h-4 text-white mr-2" />
							<span className="text-white text-sm font-medium">Join the community</span>
						</div>

						<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-pink-200 bg-clip-text text-transparent leading-tight">
							Join our community
						</h2>

						<p className="text-lg md:text-xl text-blue-100/90 max-w-[80ch] mx-auto md:text-balance leading-relaxed">
							Atomox is where developers share, discover, and collaborate on amazing web components. Upload your creations and get inspired by the community.
						</p>
					</div>

					{/* Stats */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
						<div className="space-y-1">
							<div className="text-3xl font-bold text-white">10,000+</div>
							<div className="text-sm text-blue-200">Components</div>
						</div>
						<div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>
						<div className="space-y-1">
							<div className="text-3xl font-bold text-white">5,000+</div>
							<div className="text-sm text-blue-200">Developers</div>
						</div>
						<div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>
						<div className="space-y-1">
							<div className="text-3xl font-bold text-white">50+</div>
							<div className="text-sm text-blue-200">Countries</div>
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
						<button className="group px-8 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white font-semibold rounded-xl border border-blue-400/30 hover:border-blue-300/50 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-300 backdrop-blur-sm">
							<div className="flex items-center space-x-2">
								<Plus className="size-5" />
								<span>Create component</span>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</div>
						</button>

						<button className="group relative px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:scale-105 transform">
							<div className="flex items-center space-x-2">
								<Users className="w-5 h-5" />
								<span>Join community</span>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</div>
							<div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
						</button>
					</div>
				</div>
			</div>

			<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 pb-4 border border-white/10 hover:border-white/20 transition-all duration-300 group">
				<div className="flex items-start space-x-4">
					<div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
						<Github className="w-8 h-8 text-white" />
					</div>

					<div className="flex-1 justify-between items-center space-y-4 flex gap-5 flex-col lg:flex-row">
						<div>
							<h3 className="text-2xl font-bold text-white mb-1.5">
								Open Source & Free
							</h3>
							<p className="text-blue-100 text-balance">
								Atomox is open source (MIT). Contribute to the codebase,
								suggest features, or help us build something amazing together.
							</p>
						</div>

						<div className='flex gap-4 items-center'>
							<a href="https://ko-fi.com/cosmoart" target="_blank" rel="noopener noreferrer" className="bg-white text-zinc-900 px-5 py-2  rounded-lg font-medium flex items-center space-x-2 group/btn text-nowrap active:scale-95 transition-all">
								<Heart className="size-4.5 group-hover/btn:scale-120 text-pink-500 fill-transparent group-hover/btn:fill-pink-500 group-hover/btn:rotate-6 transition-all" />
								<span>Sponsor</span>
							</a>
							<a href="https://github.com/cosmoart/Atomox" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-all  flex items-center space-x-2 group/btn text-nowrap">
								<Github className="size-4.5 group-hover/btn:scale-120 transition-transform" />
								<span>Contribute on GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer >
	)
}