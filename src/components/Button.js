export default function Button({ ...props }) {
	return (
		<button
			className="text-body-m leading-[16px] py-3 px-4 max-h-[40px] hover:bg-[#928CFF] bg-denim text-white rounded font-medium"
			{...props}
		/>
	)
}
