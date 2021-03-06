import * as SettingsActions from './SettingsActions';
import { ActionCreator } from 'redux';
import Sex from '../../model/enums/Sex';

const isSoundEnabledChanged: ActionCreator<SettingsActions.IsSoundEnabledChangedAction> = (isSoundEnabled: boolean) => ({
	type: SettingsActions.SettingsActionTypes.IsSoundEnabledChanged, isSoundEnabled
});

const showPersonsAtBottomOnWideScreenChanged: ActionCreator<SettingsActions.ShowPersonsAtBottomOnWideScreenChangedAction> = (
	showPersonsAtBottomOnWideScreen: boolean
	) => ({
		type: SettingsActions.SettingsActionTypes.ShowPersonsAtBottomOnWideScreenChanged, showPersonsAtBottomOnWideScreen
	});

const onSexChanged: ActionCreator<SettingsActions.SexChangedAction> = (newSex: Sex) => ({
	type: SettingsActions.SettingsActionTypes.SexChanged, newSex
});

const onHintShowmanChanged: ActionCreator<SettingsActions.HintShowmanChangedAction> = (hintShowman: boolean) => ({
	type: SettingsActions.SettingsActionTypes.HintShowmanChanged, hintShowman
});

const settingsActionCreators = {
	isSoundEnabledChanged,
	showPersonsAtBottomOnWideScreenChanged,
	onSexChanged,
	onHintShowmanChanged
};

export default settingsActionCreators;
