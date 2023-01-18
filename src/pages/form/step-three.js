import Checkbox from 'components/Checkbox'
import Layout from 'components/Layout'
import StepLayout from 'components/StepLayout'
import { ADDONS } from 'utils/constants'

export default function stepThree() {
	return (
		<Layout title="Form | Step - Three">
			<StepLayout
				title="Pick add-ons"
				description="Add-ons help enhance your gaming experience."
			/>
			<div className="flex flex-col gap-3">
				{ADDONS.map((additional) => (
					<Checkbox key={additional.key} {...additional} />
				))}
			</div>
		</Layout>
	)
}
