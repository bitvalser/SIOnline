import ThemeInfo from '../../model/ThemeInfo';

export const enum TableActionTypes {
	ShowLogo = 'SHOW_LOGO',
	ShowGameThemes = 'SHOW_GAME_THEMES',
	ShowRoundThemes = 'SHOW_ROUND_THEMES',
	ShowText = 'SHOW_TEXT',
	ShowAnswer = 'SHOW_ANSWER',
	ShowRoundTable = 'SHOW_ROUND_TABLE',
	BlinkQuestion = 'BLINK_QUESTION',
	BlinkTheme = 'BLINK_THEME',
	RemoveQuestion = 'REMOVE_QUESTION',
	RemoveTheme = 'REMOVE_THEME',
	ShowPartialText = 'SHOW_PARTIAL_TEXT',
	AppendPartialText = 'APPEND_PARTIAL_TEXT',
	ShowImage = 'SHOW_IMAGE',
	ShowAudio = 'SHOW_AUDIO',
	ShowVideo = 'SHOW_VIDEO',
	ShowSpecial = 'SHOW_SPECIAL',
	CanPressChanged = 'CAN_PRESS_CHANGED',
	IsSelectableChanged = 'IS_SELECTABLE_CHANGED',
	ResumeMedia = 'RESUME_MEDIA'
}

export type ShowLogoAction = { type: TableActionTypes.ShowLogo };
export type ShowGameThemesAction = { type: TableActionTypes.ShowGameThemes, gameThemes: string[] };
export type ShowRoundThemesAction = {
	type: TableActionTypes.ShowRoundThemes,
	roundThemes: ThemeInfo[],
	isFinal: boolean,
	display: boolean
};
export type ShowTextAction = { type: TableActionTypes.ShowText, text: string, animateReading: boolean };
export type ShowAnswerAction = { type: TableActionTypes.ShowAnswer, text: string };
export type ShowRoundTableAction = { type: TableActionTypes.ShowRoundTable };
export type BlinkQuestionAction = { type: TableActionTypes.BlinkQuestion, themeIndex: number, questionIndex: number };
export type BlinkThemeAction = { type: TableActionTypes.BlinkTheme, themeIndex: number };
export type RemoveQuestionAction = { type: TableActionTypes.RemoveQuestion, themeIndex: number, questionIndex: number };
export type RemoveThemeAction = { type: TableActionTypes.RemoveTheme, themeIndex: number };
export type ShowPartialTextAction = { type: TableActionTypes.ShowPartialText, textShape: string };
export type AppendPartialTextAction = { type: TableActionTypes.AppendPartialText, text: string };
export type ShowImageAction = { type: TableActionTypes.ShowImage, uri: string };
export type ShowAudioAction = { type: TableActionTypes.ShowAudio, uri: string };
export type ShowVideoAction = { type: TableActionTypes.ShowVideo, uri: string };
export type ShowSpecialAction = { type: TableActionTypes.ShowSpecial, text: string, activeThemeIndex: number };
export type CanPressChangedAction = { type: TableActionTypes.CanPressChanged, canPress: boolean };
export type IsSelectableChangedAction = { type: TableActionTypes.IsSelectableChanged, isSelectable: boolean };
export type ResumeMediaAction = { type: TableActionTypes.ResumeMedia };

export type KnownTableAction =
	ShowLogoAction
	| ShowGameThemesAction
	| ShowRoundThemesAction
	| ShowTextAction
	| ShowAnswerAction
	| ShowRoundTableAction
	| BlinkQuestionAction
	| BlinkThemeAction
	| RemoveQuestionAction
	| RemoveThemeAction
	| ShowPartialTextAction
	| AppendPartialTextAction
	| ShowImageAction
	| ShowAudioAction
	| ShowVideoAction
	| ShowSpecialAction
	| CanPressChangedAction
	| IsSelectableChangedAction
	| ResumeMediaAction
;
