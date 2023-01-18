import Image from 'next/image'

export default function Plan({ title, price, icon, active }) {
	const activeStyles = active
		? 'border-purple bg-very-light-grey'
		: 'bg-white border border-light-grey'
	return (
		<article
			className={`${activeStyles} flex items-center gap-[14px] text-denim text-body-xl leading-[18px} max-h-[77px] hover:border-purple hover:bg-very-light-grey rounded-lg p-4 pt-[14px]`}
		>
			<Image src={icon} width="40" height="40" alt={`icon ${title}`} />
			<div>
				<h2 className="font-medium mb-[7px]">{title}</h2>
				<p className="text-grey text-body-m leading-[20px]">{price}</p>
			</div>
		</article>
	)
}
