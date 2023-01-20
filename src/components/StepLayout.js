export default function StepLayout({ title, description }) {
	return (
		<div>
			<h2 className="text-denim mb-[9px] font-bold text-heading-m lg:text-heading-l lg:leading-[36.77px]">
				{title}
			</h2>
			<p className="text-grey text-body-l lg:text-body-xl mb-[22px] lg:mb-10 leading-[25px]">
				{description}
			</p>
		</div>
	)
}
