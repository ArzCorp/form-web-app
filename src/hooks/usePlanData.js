import { useEffect, useState } from 'react'

export const usePlanData = () => {
	const [planData, setPlanData] = useState({})

	const addNewPlanData = ({ name, value }) => {
		window.localStorage.setItem(
			'data_plan',
			JSON.stringify({
				...planData,
				[name]: value,
			})
		)

		setPlanData({
			...planData,
			[name]: value,
		})
	}

	useEffect(() => {
		if (window) {
			const data = window.localStorage.getItem('data_plan')
			setPlanData(JSON.parse(data))
		}
	}, [])

	return { planData, addNewPlanData }
}
