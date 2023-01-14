import Layout from 'components/Layout'
import TextInput from 'components/TextInput'

export default function stepOne() {
	return (
		<Layout title="Form | Step - one">
			<div>
				<h2 className="text-denim mb-[9px] font-bold text-heading-m">
					Personal info
				</h2>
				<p className="text-grey text-body-l mb-[22px] leading-[25px]">
					Please provide your name, email address, and phone number.
				</p>
				<div className="flex flex-col gap-4">
					<TextInput label="Name" />
					<TextInput label="Email Address" />
					<TextInput label="Phone Number" />
				</div>
			</div>
		</Layout>
	)
}
