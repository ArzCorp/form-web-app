import Layout from 'components/Layout'
import StepLayout from 'components/StepLayout'
import TextInput from 'components/TextInput'
import { usePlanData } from 'hooks/usePlanData'
import { useState } from 'react'

export default function StepOne() {
	const [person, setPerson] = useState()

	const { addNewPlanData } = usePlanData()

	const handleChange = (e) => {
		const { name, value } = e.target

		setPerson({
			...person,
			[name]: value,
		})
	}

	const setDataPerson = () => {
		addNewPlanData({ name: 'personData', value: person })
	}

	return (
		<Layout title="Form | Step - one" onClickNextPage={setDataPerson}>
			<StepLayout
				title="Personal info"
				description="Please provide your name, email address, and phone number."
			/>
			<div className="flex flex-col gap-4 lg:gap-6 pb-2">
				<TextInput
					name="fullName"
					label="Name"
					placeholder="Osvaldo Arzate Santiago"
				/>
				<TextInput
					name="email"
					type="email"
					label="Email Address"
					placeholder="osvaldo.arzate@example.com"
				/>
				<TextInput
					name="phoneNumber"
					label="Phone Number"
					placeholder="01 + 5553457529"
					onChange={handleChange}
					type="number"
				/>
			</div>
		</Layout>
	)
}
