import React, { useReducer } from 'react';
// import uuidV4 from 'uuid/v4';
import schedules from 'containers/Checkout/data';
import { ProfileContext } from './profile.context';

type Action =
  | { type: 'UPDATE_ME_INFO', payload: any}
  | { type: 'HANDLE_ON_INPUT_CHANGE'; payload: any }
  | { type: 'ADD_OR_UPDATE_CONTACT'; payload: any }
  | { type: 'DELETE_CONTACT'; payload: any }
  | { type: 'ADD_OR_UPDATE_ADDRESS'; payload: any }
  | { type: 'DELETE_ADDRESS'; payload: any }
  | { type: 'ADD_CARD'; payload: any }
  | { type: 'DELETE_CARD'; payload: any }
  | { type: 'SET_PRIMARY_CONTACT'; payload: any }
  | { type: 'SET_PRIMARY_ADDRESS'; payload: any }
  | { type: 'SET_PRIMARY_SCHEDULE'; payload: any }
  | { type: 'SET_PRIMARY_CARD'; payload: any };
function reducer(state: any, action: Action): any {
  // console.log(action)
  switch (action.type) {
    case 'UPDATE_ME_INFO': 
    return {...action.payload, schedules};
    case 'HANDLE_ON_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'ADD_OR_UPDATE_CONTACT':
      if (action.payload.updateContact) {
        const {payload:{updateContact:{contact}}} = action;
        return {
          ...state,
          contacts: state.contacts.map((item: any) =>
            item.id === contact.id
              ? { ...item, ...contact }
              : item
          ),
        };
      }
    return {
      ...state,
      contacts: [...state.contacts, action.payload.createContact.contact],
    };

    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    case 'ADD_OR_UPDATE_ADDRESS':
      if (action.payload.updateAddress) {
        const {payload:{updateAddress:{address}}} = action;
        return {
          ...state,
          address: state.address.map((item: any) =>
            item.id === address.id
              ? { ...item, ...address }
              : item
          ),
        };
      }
      return {
        ...state,
        address: [...state.address, action.payload.createAddress.address],
      };
    case 'DELETE_ADDRESS':
      return {
        ...state,
        address: state.address.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    case 'ADD_CARD':
      const newCard = {
        id: action.payload.id,
        Type: state.cards.length === '0' ? 'primary' : 'secondary',
        cardType: action.payload.brand.toLowerCase(),
        firstName: state.firstName,
        lastName: state.lastName,
        lastFourDigit: action.payload.last4,
      };
      return {
        ...state,
        cards: [newCard, ...state.cards],
      };
    case 'DELETE_CARD':
      return {
        ...state,
        cards: state.cards.filter((item: any) => item.id !== action.payload),
      };
    case 'SET_PRIMARY_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((item: any) =>
          item.id === action.payload
            ? { ...item, Type: 'primary' }
            : { ...item, Type: 'secondary' }
        ),
      };
    case 'SET_PRIMARY_ADDRESS':
      return {
        ...state,
        address: state.address.map((item: any) =>
          item.id === action.payload
            ? { ...item, Type: 'primary' }
            : { ...item, Type: 'secondary' }
        ),
      };
    case 'SET_PRIMARY_SCHEDULE':
      return {
        ...state,
        schedules: state.schedules.map((item: any) =>
          item.id === action.payload
            ? { ...item, Type: 'primary' }
            : { ...item, Type: 'secondary' }
        ),
      };
    case 'SET_PRIMARY_CARD':
      return {
        ...state,
        cards: state.cards.map((item: any) =>
          item.id === action.payload
            ? { ...item, Type: 'primary' }
            : { ...item, Type: 'secondary' }
        ),
      };
    default:
      return state;
  }
}

type ProfileProviderProps = {
  initData: any;
};

export const ProfileProvider: React.FunctionComponent<ProfileProviderProps> = ({
  children,
  initData,
}) => {
  const [state, dispatch] = useReducer(reducer, { ...initData, schedules });
  // console.log(state, 'profile provider state');

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
