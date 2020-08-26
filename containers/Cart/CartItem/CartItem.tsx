import React from 'react';
import { Counter } from 'components/Counter/Counter';
import { CURRENCY } from 'helper/constant';
import { CloseIcon } from 'assets/icons/close';
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from './CartItem.style';

interface Props {
  data: any;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
}

export const CartItem: React.FC<Props> = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const { title, images, price, salePrice, unit, quantity } = data;
  const displayPrice = salePrice ? salePrice : price;
  const totalPrice = quantity * displayPrice;
  // console.log(images)
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant='lightVertical'
      />
      <Image src={process.env.MEDIA_URL + images[0].image} />
      <Information>
        <Name>{title}</Name>
        <Price>
          {CURRENCY}
          {displayPrice}
        </Price>
        <Weight>
          {quantity} X {unit}
        </Weight>
      </Information>
      <Total>
        {CURRENCY}
        {totalPrice.toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
