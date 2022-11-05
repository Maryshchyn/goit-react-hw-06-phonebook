import {FormItemP, FormItemLi, FormItemButton} from './FormItem.styled'

export const FormItem = ({ id, name, number, onDelete }) => {
  return (
    <FormItemLi key={id}>
      <FormItemP>
        {name}: {number}
      </FormItemP>
      <FormItemButton type="button" onClick={() => onDelete(id)}>
        Видалити
      </FormItemButton>
    </FormItemLi>
  );
};