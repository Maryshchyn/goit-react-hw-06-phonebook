
import {FormListUl} from './FormList.styled'
import {FormItem} from '../FormItem/FormItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';



export const FormList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContact = useSelector(state => state.contacts.filter);

  const handleDelete = id => dispatch(deleteContact(id));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  

  return (
    <FormListUl>
      {visibleContacts.map(({ id, name, number }) => (
        <FormItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDelete={handleDelete}
        />
      ))}
    </FormListUl>
  );
};


