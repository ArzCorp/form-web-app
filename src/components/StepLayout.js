export default function StepLayout({ title, description }) {
	return (
		<div>
			<h2 className="text-denim mb-[9px] font-bold text-heading-m">{title}</h2>
			<p className="text-grey text-body-l mb-[22px] leading-[25px]">
				{description}
			</p>
		</div>
	)
}
