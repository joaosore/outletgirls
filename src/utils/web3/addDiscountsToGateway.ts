const addDiscountsToGateway = (mainData, discountData) => {
  console.log('mainData', mainData);
  console.log('discountData', discountData);

  const updatedGateway = mainData.currencies.map((gatewayItem) => {
    const discountItem = discountData.find(
      (discount) =>
        discount.type === gatewayItem.type &&
        discount.currency.currency === gatewayItem.currency.currency
    );

    return discountItem
      ? { ...gatewayItem, discount: discountItem.discount }
      : gatewayItem;
  });

  return { ...mainData, currencies: updatedGateway };
};

export { addDiscountsToGateway };
