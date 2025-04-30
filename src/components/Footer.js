const Footer = () => {
	return (
		<header class="flex justify-between items-center px-6 md:px-12 py-6">
		<div class="text-2xl font-bold">
			<span class="text-pink-400">
				Acne
			</span>
			<span class="text-sky-400">
				Scan
			</span>
		</div>
		<nav class="flex space-x-6 text-sm font-medium">
			<a class="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition" href="#">
				Home
			</a>
			<a class="text-pink-300 hover:text-pink-400 transition" href="#">
				Upload
			</a>
			<a class="text-pink-300 hover:text-pink-400 transition" href="#">
				About Us
			</a>
		</nav>
	</header>
	)
}