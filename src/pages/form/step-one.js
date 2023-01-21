import Layout from 'components/Layout'
import StepLayout from 'components/StepLayout'
import TextInput from 'components/TextInput'

export default function stepOne() {
	const handleChange = (e) => {
		const { name, value, type } = e.target
	}
	return (
		<Layout title="Form | Step - one">
			<StepLayout
				title="Personal info"
				description="Please provide your name, email address, and phone number."
			/>
			<div className="flex flex-col gap-4 lg:gap-6 pb-2">
				<TextInput label="Name" placeholder="Osvaldo Arzate Santiago" />
				<TextInput
					type="email"
					label="Email Address"
					placeholder="osvaldo.arzate@example.com"
				/>
				<TextInput
					label="Phone Number"
					placeholder="01 + 5553457529"
					onChange={handleChange}
					type="number"
				/>
			</div>
		</Layout>
	)
}
