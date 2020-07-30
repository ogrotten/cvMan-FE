import React, { useState, useEffect } from 'react'

function Builder() {
	const [BE, setBE] = useState("")

	const get = () => {
		fetch("http://localhost:5000/api/build")
			.then(res => res.json())
			.then(res => {
				console.log(9, res)
				return res
			})
			.then(res => setBE(res.butt))
	}
	useEffect(() => {
		get()
	}, [])

	return (
		<div>
			BE = {BE}
		</div>
	)
}

export default Builder
