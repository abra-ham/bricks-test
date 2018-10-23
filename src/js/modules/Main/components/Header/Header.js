import React from 'react';
import './style.scss';
import LogoXL from '../../../../../assets/img/logotipo-v-2@3x.png';
import ProfilePicXL from '../../../../../assets/img/profile-pic@3x.png';

import {Icon} from '../../../../components';

const Header = props => {
	return (
		<header styleName="header">
			<div id="logo" styleName="logo">
				<img src={LogoXL} alt="100ladrilloslogo"/>
			</div>
			<div styleName="content" className="flex right middle">
				<div id="profile" className="flex center middle" styleName="profile">
					<img src={ProfilePicXL} alt="profile-picture" height="34" width="35" />
					<span>Mariana García</span>
				</div>
				<div styleName="actions">
					<Icon name="settings" />
					<Icon name="notification" />
					<Icon name="logout" />
				</div>
			</div>
		</header>
	);
};

export default Header;
