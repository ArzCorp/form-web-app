import { useEffect, useState } from 'react'

export const usePlanData = () => {
	const [planData, setPlanData] = useState({})

	const addNewPlanData = (newValues) => {
		window.localStorage.setItem(
			'data_plan',
			JSON.stringify({
				...planData,
				...newValues,
			})
		)

		setPlanData({
			...planData,
			...newValues,
		})
	}

	useEffect(() => {
		if (window) {
			const data = window.localStorage.getItem('data_plan')
			if (data) setPlanData(JSON.parse(data))
		}
	}, [])

	return { planData, addNewPlanData }
}
