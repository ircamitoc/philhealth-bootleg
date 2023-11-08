export interface NavigationItem {
    position: any;
    open: boolean;
    text: string;
    route?: string;
    subitems?: NavigationItem[];
}

export const getNavigation = async () => {
	const navigationData = await fetch("http://localhost:5000/navigation/get").then(async (res) => {
		const data: Array<NavigationItem> = await res.json();
		return data;
	});
	return navigationData;
}