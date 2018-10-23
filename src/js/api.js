import config from './config';

const { BASE_URL } = config;

const endpoints = (userId = 0) => {
	return {
		users: `${BASE_URL}/users`,
		user: `${BASE_URL}/users/${userId}`,
		myAccount: `${BASE_URL}/${userId}/my-account`,
		myProfits: `${BASE_URL}/users/${userId}/my-profits`,
		capitalGain: `${BASE_URL}/users/${userId}/my-profits/capital-gain`,
		profitSales: `${BASE_URL}/users/${userId}/my-profits/sales`,
		profitRents: `${BASE_URL}/users/${userId}/my-profits/rents`,
		others: `${BASE_URL}/users/${userId}/my-profits/others`,
		myBricks:	`${BASE_URL}/users/${userId}/my-bricks`,
		myRents: `${BASE_URL}/users/${userId}/my-rents`,
		mySales: `${BASE_URL}/users/${userId}/my-sales`
	}
};

export default endpoints;
