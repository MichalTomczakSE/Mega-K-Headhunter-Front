export const Loading = () => {
	return (
		<div role="status" className="flex h-screen w-screen justify-center items-center">
			<div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]">
			</div>
		</div>
	)
};