import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/Sof-Omar-1.jpg"
							text="Explore the beautiful Sof-Omar in Bale"
							label="Adventure"
							path="/services"
						/>
						<CardItem
							src="images/HARAR-GATES-ETB.jpg"
							text="Travel to the Old city of Harar"
							label="Adventure"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/Bale-Mountain.jpg"
							text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
							label="Mystery"
							path="/services"
						/>
						<CardItem
							src="images/Bishoftu-lake.jpg"
							text="Experience Football on Top of the Himilayan Mountains"
							label="Luxury"
							path="/products"
						/>
						<CardItem
							src="images/Awash-Park.jpg"
							text="Ride through the Sahara Desert on a guided camel tour"
							label="Adrenaline"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
