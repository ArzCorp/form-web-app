import Layout from 'components/Layout'
import StepLayout from 'components/StepLayout'
import Link from 'next/link'

export default function stepFour() {
	return (
		<Layout title="Form | Step - Four">
			<StepLayout
				title="Finishing up"
				description="Double-check everything looks OK before confirming."
			/>
			<div className="bg-very-light-grey text-grey text-body-m leading-[20px] p-4 mb-6 rounded-lg">
				<div className="flex justify-between items-center">
					<div>
						<p className="text-denim font-medium">Arcade (Monthly)</p>
						<Link href="/form/step-two">
							<span className="underline">Change</span>
						</Link>
					</div>
					<p className="font-bold text-denim">$9/mo</p>
				</div>
				<hr className="my-3 bg-grey" />
				<div className="flex justify-between items-center mb-3">
					<p>Online service</p>
					<p>+$1/mo</p>
				</div>
				<div className="flex justify-between items-center">
					<p>Larger storage</p>
					<p>+$2/mo</p>
				</div>
			</div>
			<div className="flex justify-between items-center mx-7 text-grey">
				<p>Total (per month)</p>
				<p className="text-purple font-bold text-body-xl">+$12/mo</p>
			</div>
		</Layout>
	)
}
