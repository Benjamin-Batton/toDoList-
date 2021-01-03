import themes from '../styled/theme.scss';

const root = document.documentElement;

export const setTheme = (theme) => {
  Object.entries(themes[theme]).forEach(([key, value]) => {
		root.style.setProperty(key, value);
  });
}
