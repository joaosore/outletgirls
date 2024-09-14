import { AxiosResponse } from 'axios';
import { ReadFromLocalStorage } from '../LocalStorage';
import { api } from '../../services/api';

const handleAddCoupon = async ({
  coupons,
  code,
  itens,
  setCoupons,
  setCouponsError,
}) => {
  const cart = ReadFromLocalStorage('cart');
  const parse = JSON.parse(cart);

  const coupon: AxiosResponse<any> = await api.post(
    `/purchase/validate-coupom`,
    {
      code,
      classSaleIds: parse,
    }
  );

  const error: number[] = [];
  const novosItens: any = [...coupons];
  await Promise.all(
    coupon.data.coupoms.map((item) => {
      const exists = novosItens.findIndex((iten) => iten.id === item.id);
      if (exists === -1) {
        novosItens.push({
          id: item.id,
          code: item.code,
          classSaleId: item.classSaleId,
          discountType: item.discountType,
          maxUses: item.maxUses,
          currentUses: item.currentUses,
          coupomCurrencies: item.coupomCurrencies,
        });
      }
      const valid = itens.findIndex((iten) => iten.id === item.classSaleId);
      if (valid >= 0) {
        error.push(0);
      }
    })
  );

  if (error.length >= 0) {
    setCoupons(novosItens);
    setCouponsError(undefined);
  } else {
    setCouponsError('Esse cupom não é valido para esses cursos');
  }
};

export { handleAddCoupon };
