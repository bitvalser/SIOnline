import * as React from 'react';
import State from '../../state/State';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import AutoSizedText from '../common/AutoSizedText';
import ThemeInfo from '../../model/ThemeInfo';

interface TableSpecialProps {
	roundInfo: ThemeInfo[];
	activeThemeIndex: number;
	text: string;
}

const mapStateToProps = (state: State) => ({
	roundInfo: state.run.table.roundInfo,
	activeThemeIndex: state.run.table.activeThemeIndex,
	text: state.run.table.text
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({

});

export class TableSpecial extends React.Component<TableSpecialProps> {
	constructor(props: TableSpecialProps) {
		super(props);
	}

	render() {
		const activeThemeIndex = this.props.activeThemeIndex;
		return (
			<div className="specialTable">
				<div className="specialThemes">
					{this.props.roundInfo.map((themeInfo, themeIndex) => {
						const isActive = themeIndex === activeThemeIndex;
						return (
							<AutoSizedText key={themeIndex} className={`roundTableCell specialTheme themeHeader ${isActive ? 'active' : ''}`}
								maxFontSize={144}>
								{isActive ? themeInfo.name : ''}
							</AutoSizedText>
						);
					})}
				</div>
				<AutoSizedText className="centerBlock specialHost rotate" maxFontSize={288}>{this.props.text}</AutoSizedText>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSpecial);
