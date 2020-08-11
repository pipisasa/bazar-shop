import React from 'react';
import { FormattedMessage } from 'react-intl';
import Carousel from 'components/Carousel/Carousel';
import PaymentCard from '../PaymentCard/PaymentCard';
import { Plus } from '../AllSvgIcon';
import Button from '../Button/Button';
import {
  Header,
  PaymentCardList,
  SavedCard,
  OtherPayOption
} from './PaymentGroup.style';

interface PaymentCardType {
  id: number | string;
  type: string;
  lastFourDigit: string;
  name: string;
}

interface PaymentOptionType {
  showCard?: boolean;
  addedCard?: PaymentCardType[];
  mobileWallet?: boolean;
  cashOnDelivery?: boolean;
}

interface PaymentGroupProps {
  id?: any;
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  name: string;
  disabled?: boolean;
  label?: string;
  className?: string;
  value?: string;
  onChange: Function;
  items: any;
  onEditDeleteField: any;
  handleAddNewCard: any;
}

const PaymentGroup: React.FunctionComponent<PaymentGroupProps> = ({
  items,
  deviceType,
  className,
  name,
  onChange,
  onEditDeleteField,
  handleAddNewCard
}) => {
  // RadioGroup State

  // Handle onChange Func
  const handleChange = (item: any) => {
    onChange(item);
  };
  return (
    <>
      {/* {deviceType === 'desktop' && ( */}
      <Header>
        {items.length !== 0 && (
          <SavedCard>
            <FormattedMessage id='savedCardsId' defaultMessage='Saved Cards' />
          </SavedCard>
        )}
        <Button
          title='Add Card'
          colors='primary'
          size='small'
          variant='textButton'
          type='button'
          icon={<Plus width='10px' />}
          iconPosition='left'
          onClick={handleAddNewCard}
          intlButtonId='addCardBtn'
        />
      </Header>
      <PaymentCardList>
        <Carousel
          deviceType={deviceType}
          autoPlay={false}
          infinite={false}
          data={items}
          component={(item: any) => (
            <PaymentCard
              key={item.id}
              onChange={() => handleChange(item)}
              onDelete={() => onEditDeleteField(item, 'delete')}
              {...item}
            />
          )}
        />
      </PaymentCardList>

      {items.mobileWallet === true || items.cashOnDelivery === true ? (
        <OtherPayOption>
          {/* Mobile Wallet */}
          {items.mobileWallet === true ? (
            <label
              htmlFor='mobile-wallet'
              key='${name}-mobile-wa'
              className='other-pay-radio'
            >
              <input
                type='radio'
                id='mobile-wallet'
                name={name}
                value='mobile-wallet'
                onChange={handleChange}
              />
              <span>Mobile Wallet</span>
            </label>
          ) : (
            ''
          )}

          {/* Cash On Delivery */}
          {items.cashOnDelivery === true ? (
            <label
              htmlFor='cash-on-delivery'
              key='${name}-cash'
              className='other-pay-radio cash-on-delivery'
            >
              <input
                type='radio'
                id='cash-on-delivery'
                name={name}
                value='cash-on-delivery'
                onChange={handleChange}
              />
              <span>Cash On Delivery</span>
            </label>
          ) : (
            ''
          )}
        </OtherPayOption>
      ) : (
        ''
      )}
    </>
  );
};

export default PaymentGroup;

// TODO надо удалить
// let a = {
//   "id":"tok_1HEuH3H3UCpAVYYr7u3i8Rhv",
//   "object":"token",
//   "card":{
//     "id":"card_1HEuH2H3UCpAVYYr8W8TnwQZ",
//     "object":"card",
//     "address_city":null,
//     "address_country":null,
//     "address_line1":null,
//     "address_line1_check":null,
//     "address_line2":null,
//     "address_state":null,
//     "address_zip":null,
//     "address_zip_check":null,
//     "brand":"Visa",
//     "country":"KG",
//     "cvc_check":"unchecked",
//     "dynamic_last4":null,
//     "exp_month":7,
//     "exp_year":2023,
//     "funding":"debit",
//     "last4":"7878",
//     "metadata":{},
//     "name":"Name",
//     "tokenization_method":null
//   },
//   "client_ip":"212.112.119.149",
//   "created":1597140005,
//   "livemode":false,
//   "type":"card",
//   "used":false
// }