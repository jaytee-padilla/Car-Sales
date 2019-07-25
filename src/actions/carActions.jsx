export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

export function removeFeatureAction(feature) {
	return {
		type: REMOVE_FEATURE,
		payload: feature
	};
};

export function buyItemAction(item) {
	return {
		type: BUY_ITEM,
		payload: item
	};
};