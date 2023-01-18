export default function TextInput({ name, label, ...props }) {
	return (
		<div>
			<label className="text-body-s block mb-[3px] text-denim" htmlFor={name}>
				{label}
			</label>
			<input
				className="w-full border-border border placeholder-grey text-grey outline-purple p-3 rounded text-body-l font-medium max-h-[40px]"
				type="text"
				name={name}
				{...props}
			/>
		</div>
	)
}
