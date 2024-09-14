function updateActiveStatusByGateway(carts, gateway) {
  if (!Array.isArray(carts)) {
    throw new Error('Input must be an array');
  }

  return carts
    .map((obj) => {
      if (
        Array.isArray(obj.currencies) &&
        obj.currencies.some((gat) => gat.type === gateway)
      ) {
        return { ...obj, active: true };
      } else {
        return { ...obj, active: false };
      }
    })
    .sort((a, b) => {
      if (a.active === b.active) {
        return 0;
      }
      return a.active ? -1 : 1;
    });
}

function updateActiveStatusByToken(carts, token) {
  if (!Array.isArray(carts)) {
    throw new Error('Input must be an array');
  }

  return carts.map((obj) => {
    if (obj.currencies.some((item) => item.currency.currency === token)) {
      return { ...obj, active: true };
    } else {
      return { ...obj, active: false };
    }
  });
}

function listInitiveStatus(carts) {
  return carts.filter((item) => item.active === false);
}

export {
  updateActiveStatusByGateway,
  updateActiveStatusByToken,
  listInitiveStatus,
};
