import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge';

import './AddList.scss';

const AddList = ({ colors }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const [selectedColor, selectColor] = useState(null);

	return (
		<div className="add-list">
			<List
				onClick={() => setVisiblePopup(true)} // Shows the function of adding a list

				items={[
					{
						className: 'list__add-btn',
						icon: (
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>),
						name: "Добавить список"
					}
				]}
			/>
			{visiblePopup && (
				<div className="add-list__popup">
					<input className="field" type="text" placeholder="Название списка" />
					<div className="add-list__popup-colors">
						<ul>
							<li>
								{
									colors.map(color => (
										<Badge
											onClick={() => selectColor(color.id)}
											key={color.id}
											color={color.name}
											className={selectedColor === color.id && 'active'}
										/>
									))
								}
							</li>
							<li></li>
						</ul>
					</div>
					<button className="AddList-btn">Добавить</button>
				</div>
			)}
		</div>
	);

};


export default AddList;