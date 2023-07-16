interface ReaderGradients {
	[key: string]: string;
}

export const readerGradients: ReaderGradients = {
	red: 'bg-gradient-to-b from-red-500',
	blue: 'bg-gradient-to-b dark:from-sky-900 from-sky-200',
	green: 'bg-gradient-to-b dark:from-emerald-900 from-emerald-300 '
};

interface SolidColors {
	[key: string]: string;
}

export const solidColors: SolidColors = {
	red: 'bg-amber-900 dark:bg-amber-900',
	blue: 'bg-cyan-300 dark:bg-cyan-900',
	green: 'bg-green-200 dark:bg-emerald-900',
	monochrome: 'bg-white dark:bg-zinc-800'
};

interface SolidColorsHex {
	light: {
		[key: string]: string;
	};
	dark: {
		[key: string]: string;
	};
}

export const solidColorsHex: SolidColorsHex = {
	light: {
		blue: '#bae6fd',
		green: '#6ee7b7',
		reader: '#f4f4f5'
	},
	dark: {
		blue: '#0c4a6e',
		green: '#064e3b',
		reader: '#18181b'
	}
};

interface ColorSchemeColors {
	light: {
		bg: string;
		readerBG: string;
	};
	dark: {
		bg: string;
		readerBG: string;
	};
	[key: string]: {
		bg: string;
		readerBG: string;
	};
}

export const colorSchemeColors: ColorSchemeColors = {
	light: {
		readerBG: 'bg-zinc-100',
		bg: 'bg-white'
	},
	dark: {
		readerBG: 'bg-zinc-900',
		bg: 'bg-black'
	}
};

export const colorfulGradients = {
	red: 'bg-gradient-to-r from-red-500',
	blue: 'bg-gradient-to-r from-sky-500 to-blue-400',
	green: 'bg-gradient-to-r from-emerald-900 to-teal-900',
	monochrome: 'bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-white/30 dark:to-white/30',
	hover: 'bg-gradient-to-r from-blue-300/70 to-teal-300/80 dark:from-white/30 dark:to-white/30'
};
