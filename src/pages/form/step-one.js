import Layout from 'components/Layout'
import StepLayout from 'components/StepLayout'
import TextInput from 'components/TextInput'

export default function stepOne() {
	return (
		<Layout title="Form | Step - one">
			<StepLayout
				title="Personal info"
				description="Please provide your name, email address, and phone number."
			/>
			<div className="flex flex-col gap-4">
				<TextInput label="Name" />
				<TextInput label="Email Address" />
				<TextInput label="Phone Number" />
			</div>
		</Layout>
	)
}
