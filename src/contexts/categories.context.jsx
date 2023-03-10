import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";
//import { addCollectionAndDocuments } from "../utils/firebase/firebase.util.js";

//import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
	categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	//to put data in the database
	// useEffect(()=>{
	//     addCollectionAndDocuments('categories', SHOP_DATA);
	// },[]);

	//to get data from firestore
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
