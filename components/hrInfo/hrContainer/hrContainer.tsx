interface HrContainerProps {
	children: JSX.Element | JSX.Element[];
};

export const HrContainer = ({children}: HrContainerProps) => {
	return (
		<div className='flex w-full h-screen flex-col justify-center items-center'>
			{children}
		</div>
	)
};