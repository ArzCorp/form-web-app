import Layout from 'components/Layout'
import Image from 'next/image'

export default function Success() {
	return (
		<Layout>
			<article className="flex flex-col justify-center text-center py-[79px]">
				<Image
					className="mx-auto"
					src="/icons/icon-thank-you.svg"
					width="56"
					height="56"
					alt="success"
				/>
				<p className="mt-6 mb-[9px] text-heading-m font-bold text-denim">
					Thank you!
				</p>
				<p className="text-grey text-body-l leading-[25px]">
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					at support@loremgaming.com.
				</p>
			</article>
		</Layout>
	)
}
