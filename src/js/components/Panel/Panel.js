import React from 'react';

import { Button } from '../index';

import './style.scss';

const Panel = props => {
	const { id, children, title, className, onClick, buttonText } = props;

	return (
		<section id={`${id}-panel`} styleName="panel" className={className}>
			<div id="header" styleName="header" className="flex end">
				<div styleName="title-container">
					<h1>{title}</h1>
				</div>	
				{onClick && (
					<div styleName="button-container" className="flex right end">
						<Button type="button" style="primary">
							{buttonText}
						</Button>
					</div>
				)}
			</div>
			<section id="body" styleName="body">
				{children}
			</section>
		</section>
	);
}

export default Panel;
