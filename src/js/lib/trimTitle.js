const trimTitle = (title = '/route') => {
	const [ slash, ...rest ] = title.split('');
	const name = rest;

	name[0] = name[0].toUpperCase();

	return name;
}

export default trimTitle;
