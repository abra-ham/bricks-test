const formatAmount = (amount = 0, locale = 'en', prefix = '$') => {
	return `${prefix}${Number(amount).toLocaleString(locale)}`;
}

export default formatAmount;
