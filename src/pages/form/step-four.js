import Layout from 'components/Layout'
import StepLayout from 'components/StepLayout'
import { usePlanData } from 'hooks/usePlanData'
import Link from 'next/link'

export default function StepFour() {
	const { planData } = usePlanData()
	return (
		<Layout title="Form | Step - Four">
			<StepLayout
				title="Finishing up"
				description="Double-check everything looks OK before confirming."
			/>
			<div className="bg-very-light-grey text-grey text-body-m leading-[20px] p-4 lg:px-6 mb-6 rounded-lg">
				<div className="flex justify-between items-center lg:mb-6">
					<div>
						<p className="text-denim font-medium text-body-xl leading-[18px] mb-[7px]">
							Arcade ({planData.planTypeName})
						</p>
						<Link href="/form/step-two">
							<span className="underline text-body-m leading-5 hover:text-purple transition-colors">
								Change
							</span>
						</Link>
					</div>
					<p className="font-bold text-denim">
						$9/{planData.planTypeShortName}
					</p>
				</div>
				<hr className="my-3 bg-grey" />
				<div className="flex justify-between items-center mb-3 text-body-m leading-5">
					<p>Online service</p>
					<p className="text-denim">+$1/{planData.planTypeShortName}</p>
				</div>
				<div className="flex justify-between items-center">
					<p>Larger storage</p>
					<p className="text-denim">+$2/{planData.planTypeShortName}</p>
				</div>
			</div>
			<div className="flex justify-between items-center mx-7 text-grey">
				<p>Total (per {planData.planTypeShortName})</p>
				<p className="text-purple font-bold text-body-xl lg:text-xl lg:leading-5">
					$12/{planData.planTypeShortName}
				</p>
			</div>
		</Layout>
	)
}
