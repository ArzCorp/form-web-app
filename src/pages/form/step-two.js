import Layout from 'components/Layout'
import Plan from 'components/Plan'
import StepLayout from 'components/StepLayout'
import Toggle from 'components/Toggle'
import { useState } from 'react'
import { FALSE, PLANS } from 'utils/constants'

export default function StepTwo() {
	const [paymentFrequency, setPaymentFrequency] = useState(FALSE)
	const [selectedPlan, setSelectedPlan] = useState({})

	const paymentYearly = paymentFrequency

	const activePaymentYearlyStyles = paymentYearly ? 'text-denim' : ''
	const activePaymentMonthlyStyles = !paymentYearly ? 'text-denim' : ''

	const handlePaymentFrequency = (e) => {
		const { value } = e.target
		setPaymentFrequency(value)
	}

	return (
		<Layout title="Form | Step - Two">
			<StepLayout
				title="Select your plan"
				description="You have the option of monthly or yearly billing."
			/>
			<div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
				{PLANS.map((plan) => (
					<Plan
						key={plan.id}
						{...plan}
						onClick={setSelectedPlan}
						isActive={selectedPlan.id === plan.id}
					/>
				))}
			</div>
			<div className="mt-6 p-3 bg-very-light-grey rounded-lg flex items-center justify-center gap-6 text-body-m font-medium leading-[16px] text-grey">
				<p className={activePaymentMonthlyStyles}>Monthly</p>
				<Toggle onClick={handlePaymentFrequency} />
				<p className={activePaymentYearlyStyles}>Yearly</p>
			</div>
		</Layout>
	)
}
